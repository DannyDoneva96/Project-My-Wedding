// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRZsKUbk_vn-vwT2bFEaUUhNL5x6WaFWw",
  authDomain: "weddingapp-23687.firebaseapp.com",
  projectId: "weddingapp-23687",
  storageBucket: "weddingapp-23687.appspot.com",
  messagingSenderId: "826209655375",
  appId: "1:826209655375:web:3a8d584a381cded521e83a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth(app)