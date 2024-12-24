// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-DcKZPPhnt57VWIZOe99xUkneoSe1oc",
  authDomain: "tcgames-bf679.firebaseapp.com",
  projectId: "tcgames-bf679",
  storageBucket: "tcgames-bf679.firebasestorage.app",
  messagingSenderId: "485193312636",
  appId: "1:485193312636:web:346f2e2f2797da0a705cf9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
