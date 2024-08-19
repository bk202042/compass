import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNG4d1GnE9jYxZAg5VgcgPdB503GHYAz8",
  authDomain: "compass-b.firebaseapp.com",
  projectId: "compass-b",
  storageBucket: "compass-b.appspot.com",
  messagingSenderId: "1091558501933",
  appId: "1:1091558501933:web:98c23f39bb8466b183d2a4",
  measurementId: "G-64FP1C53EM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
