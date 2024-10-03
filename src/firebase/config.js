// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn_KAIijfQWNzkYvhjt2cShpDFleRKFs0",
  authDomain: "mimochilita-f0878.firebaseapp.com",
  projectId: "mimochilita-f0878",
  storageBucket: "mimochilita-f0878.appspot.com",
  messagingSenderId: "473139058271",
  appId: "1:473139058271:web:74bdb289b54df86914adea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);