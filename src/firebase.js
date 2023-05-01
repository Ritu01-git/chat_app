
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDrbrKR7vMtUiafFOPYn64vagYyhQWw9yg",
  authDomain: "chat-application-34b33.firebaseapp.com",
  projectId: "chat-application-34b33",
  storageBucket: "chat-application-34b33.appspot.com",
  messagingSenderId: "629689377671",
  appId: "1:629689377671:web:a0f7fca22dd5bada31e922"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();