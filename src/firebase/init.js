// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA5ql7I5fjgP9iDEh_NVmq1jbOgjy4keI",
  authDomain: "fir-na-9e38c.firebaseapp.com",
  projectId: "fir-na-9e38c",
  storageBucket: "fir-na-9e38c.firebasestorage.app",
  messagingSenderId: "773980516389",
  appId: "1:773980516389:web:8a1cdd2dabf683821a4fcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
