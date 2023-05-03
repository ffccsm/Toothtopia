// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszwow0gZhu6f-s1MRl_CaQvSzkr2YGkQ",
  authDomain: "doctor-website-30873.firebaseapp.com",
  projectId: "doctor-website-30873",
  storageBucket: "doctor-website-30873.appspot.com",
  messagingSenderId: "953664074301",
  appId: "1:953664074301:web:f36b28fbc987da11e8b054",
  measurementId: "G-NGQ8NME3SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;