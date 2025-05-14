import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVOCGcIMTPJAUhIOX_3zqiKvdPUqOUDTs",
  authDomain: "library-5aca3.firebaseapp.com",
  projectId: "library-5aca3",
  storageBucket: "library-5aca3.appspot.com",
  messagingSenderId: "359179660489",
  appId: "1:359179660489:web:f09faa2582021f2b0ab118",
  measurementId: "G-RC613VB8E6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
