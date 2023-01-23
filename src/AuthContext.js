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
import { getDocs, doc, updateDoc, collection, where, query } from 'firebase/firestore';
import {  db, auth } from './firebase';


const userAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export function UserAuthContextProvider({ children }) {
  
  
 
  const navigate = useNavigate();
  
  const [user,setUser] = useState({});
  const [userInfo,setUserInfo] = useState();

  

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
      
      const credentials = await FacebookAuthProvider.credentialFromResult(
        result
      );
      
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
      
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  
  const getUserInfo = async (user) => {
    if (user.uid) {
      const id = user.uid;

      const q = query(collection(db, 'users'), where('uid', '==', id));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        setUserInfo({ ...doc.data(), docId: doc.id });
      });
    }
  };

  const updateUser = async (userInfo, changesObj) => {
    
    const { docId } = userInfo;
    const { displayName, email } = changesObj;

    try {
      const docRef = await doc(db, 'users', docId);
      await updateDoc(docRef, changesObj);
      await updateProfile(auth.currentUser, { displayName, email });
      await getUserInfo(auth.currentUser);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  
    
    useEffect(()=>{
      if(auth.currentUser){
        getUserInfo(auth.currentUser)
      }

    },[auth.currentUser])
    
  const methods = useMemo(
    () => ({ loggedInUser: user,userData:userInfo, logIn, signUp, logOut, googleLogin, fbLogin,updateUser}),
    [userInfo]
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