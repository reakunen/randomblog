// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyDjMUQxOFdTz0_C2ShLi6j-PcS9fVqfzFc",
  authDomain: "journal-data-4e1cd.firebaseapp.com",
  projectId: "journal-data-4e1cd",
  storageBucket: "journal-data-4e1cd.appspot.com",
  messagingSenderId: "879180746882",
  appId: "1:879180746882:web:1bbb92643cf457298a649b",
//   appId: process.env.REACT_APP_ID_KEY,

  measurementId: "G-3JG0BM0QHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

