// Import the functions you need from the SDKs you need
import {getFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC90xkWJ_lYffKkYRspJpoS7yrbmPlWJFk",
  authDomain: "turinghut-registrations.firebaseapp.com",
  projectId: "turinghut-registrations",
  storageBucket: "turinghut-registrations.appspot.com",
  messagingSenderId: "411500914145", 
  appId: "1:411500914145:web:ffb393029c8d6240959ea0",
  measurementId: "G-53XNTD5BPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
// if (isSupported()) {
//   const analytics = getAnalytics();
//   // Initialize Firebase Analytics with analytics instance
// }

export const  Firestore  = getFirestore(app)
export const Storage = getStorage(app);