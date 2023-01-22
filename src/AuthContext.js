import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile, onAuthStateChanged  } from '@firebase/auth';
import {doc, getDoc } from 'firebase/firestore';
import {  db, auth } from './firebase';


const userAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export function UserAuthContextProvider({ children }) {
  
  
 
  const navigate = useNavigate();
  
  const [user,setUser] = useState({});

  

  async function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/');
      return result;
    } catch (error) {
      return { error: error.message };
    }
  };

  const fbLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      // eslint-disable-next-line
      console.log(result);
      const credentials = await FacebookAuthProvider.credentialFromResult(
        result
      );
      // eslint-disable-next-line
      console.log(credentials);
      const token = credentials.accessToken;
      const photoUrl = `${result.user.photoURL}?&access_token=${token}`;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      navigate('/');
      return result;
    } catch (error) {
      return { error: error.message };
    }
  };

  async function logOut() {
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // eslint-disable-next-line
      //   console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  const getUserInfo = async(user) => {
    if(user.uid){
      const id = user.uid
      console.log(id)
      const docRef = await doc(db, "users", "ypAffIRfAFaq8aRXgcwC");
      const docSnap = await getDoc(docRef)
  
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      return docSnap.data();
    }
   return console.log("")

    
  }
  // const [signedInUser] = useAuthState(auth);
    
    useEffect(()=>{
      
      if(auth.currentUser){
        // console.log(signedInUser)
        console.log(auth.currentUser)
        getUserInfo(auth.currentUser)
      }

    },[auth.currentUser])
    // const usersCollectionRef = collection(db, "user")
    // const getUsers = async () => {
    // const data = await getDoc(usersCollectionRef);
    // setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    // }
    // getUsers()
   

   



  const methods = useMemo(
    () => ({ loggedInUser: user, logIn, signUp, logOut, googleLogin, fbLogin }),
    []
  );
  return (
    <userAuthContext.Provider value={methods}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

// 