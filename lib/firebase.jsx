import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
  apiKey: "AIzaSyCHq6mPirDjAZGpwNEelCwesgncQOqGXxM",
  authDomain: "startcareerdev.firebaseapp.com",
  projectId: "startcareerdev",
  storageBucket: "startcareerdev.appspot.com",
  messagingSenderId: "464325951812",
  appId: "1:464325951812:web:e5f70caa3ef12e8f341711",
  measurementId: "G-84B8Q9TTQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
