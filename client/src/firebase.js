// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5b883.firebaseapp.com",
  projectId: "mern-auth-5b883",
  storageBucket: "mern-auth-5b883.appspot.com",
  messagingSenderId: "537531591353",
  appId: "1:537531591353:web:93c18baad51bf8ef3d8968",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
