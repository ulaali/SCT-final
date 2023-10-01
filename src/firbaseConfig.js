// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVOCGcIMTPJAUhIOX_3zqiKvdPUqOUDTs",
  authDomain: "library-5aca3.firebaseapp.com",
  projectId: "library-5aca3",
  storageBucket: "library-5aca3.appspot.com",
  messagingSenderId: "359179660489",
  appId: "1:359179660489:web:f09faa2582021f2b0ab118",
  measurementId: "G-RC613VB8E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app);