import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase';

const userAuthContext = createContext();
const TherapistContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [therapist, setTherapist] = useState({})

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  const createTherapist = (email, password, username, city, licensenumber) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
        async (result) => {
            console.log(result)

            try {
                const docRef = await setDoc(doc(db, "users", `${result.user.uid}`), {
                    userId: `${result.user.uid}`,
                    fullname: " ",
                    bio: " ",
                    birthdate: " ",
                    phonenumber: 0,
                    email,
                    isTherapist: true,
                    username: username,
                    city: city,
                    licensenumber: licensenumber
                });
                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }
    )
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentTherapist) => {
        setTherapist(currentTherapist);
        // console.log('Therapist', currentTherapist)
    });
    return () => {
        unsubscribe();
    };
}, []);

  const methods = useMemo(
    () => ({ loggedInUser: user, logIn, signUp, logOut }),
    []
  );
  return (
    <TherapistContext.Provider value={{ createTherapist, therapist }} >
    <userAuthContext.Provider value={methods}>
      {children}
    </userAuthContext.Provider>
    </TherapistContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

export const TherapistAuth = () => {
    return useContext(TherapistContext)
}