// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxKdD_Gw99SinDL_ASSjbBRgsheeMWqyQ",
  authDomain: "auth-simple-acba7.firebaseapp.com",
  projectId: "auth-simple-acba7",
  storageBucket: "auth-simple-acba7.appspot.com",
  messagingSenderId: "64785003198",
  appId: "1:64785003198:web:3eae958a67ff14adac24ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
