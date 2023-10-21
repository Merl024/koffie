// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMC3aiXhlWzzt_2yEu2bhhe7AznXHHtQ0",
  authDomain: "koffie-firebase.firebaseapp.com",
  projectId: "koffie-firebase",
  storageBucket: "koffie-firebase.appspot.com",
  messagingSenderId: "975205218091",
  appId: "1:975205218091:web:90d3f6ee72313e199db76e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)