// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD1vgWhRkH5rLhfz9lCWULyLPTb5mLMLog',
  authDomain: 'sugar-and-thunder.firebaseapp.com',
  projectId: 'sugar-and-thunder',
  storageBucket: 'sugar-and-thunder.appspot.com',
  messagingSenderId: '202107943655',
  appId: '1:202107943655:web:322e01f159909c50c70042',
  measurementId: 'G-TR98PV627V',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const signUp = async (auth, email) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email);
    const [user]= userCredential;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: user.email,
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

const auth = getAuth();

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const [user] = userCredential
    return true
  } catch (error) {
    return { error: error.message };
  }
};



//     const signOut = async() => {
// try {
//  await signOut(auth)
// return true
// } catch (error) {
// return false
// }
//       };
// Initialize Firebase

// const analytics = getAnalytics(app);
