// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default db;
