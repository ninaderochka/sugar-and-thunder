import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '@firebase/auth';
import { auth } from './firebase';

const userAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();


export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

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
      console.log(result)
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
