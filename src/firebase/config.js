// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsej4zeh0siXwSUlfk7Q1RYGArzzxu-1k",
  authDomain: "registro-asociaciones-civiles.firebaseapp.com",
  projectId: "registro-asociaciones-civiles",
  storageBucket: "registro-asociaciones-civiles.appspot.com",
  messagingSenderId: "391607876252",
  appId: "1:391607876252:web:3dacb45d13f0242d308b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

