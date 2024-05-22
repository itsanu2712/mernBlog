// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e2e4f.firebaseapp.com",
  projectId: "mern-blog-e2e4f",
  storageBucket: "mern-blog-e2e4f.appspot.com",
  messagingSenderId: "626945368427",
  appId: "1:626945368427:web:649629d28379258a80ac2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


