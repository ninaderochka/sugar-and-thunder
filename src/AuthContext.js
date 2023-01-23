import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile, onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase';

const userAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const [signedInUser] = useAuthState(auth);

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
  // eslint-disable-next-line
  console.log(signedInUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const getUserInfo = async (user) => {
    const id = user.uid;
    const docRef = await doc(db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // eslint-disable-next-line
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      // eslint-disable-next-line
      console.log('No such document!');
    }
  };

  // const usersCollectionRef = collection(db, "user")
  // const getUsers = async () => {
  // const data = await getDoc(usersCollectionRef);
  // setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  // }
  // getUsers()

  const methods = useMemo(
    () => ({
      loggedInUser: user,
      logIn,
      signUp,
      logOut,
      googleLogin,
      fbLogin,
      getUserInfo,
    }),
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
