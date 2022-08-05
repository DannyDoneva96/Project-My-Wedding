// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2r0AxCi1IgFNZFTXSnUz6SVbT7wVeUI",
  authDomain: "react-sofuni-weddingapp.firebaseapp.com",
  databaseURL: "https://react-sofuni-weddingapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-sofuni-weddingapp",
  storageBucket: "react-sofuni-weddingapp.appspot.com",
  messagingSenderId: "52040529616",
  appId: "1:52040529616:web:9017d047ea164c268a90d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)