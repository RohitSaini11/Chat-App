import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMhPm_Gz-wdMHKrG5Uu_hhCrFKzWjqXf4",
  authDomain: "chatapp-f34d8.firebaseapp.com",
  projectId: "chatapp-f34d8",
  storageBucket: "chatapp-f34d8.appspot.com",
  messagingSenderId: "871644976165",
  appId: "1:871644976165:web:49b5aa38fbbe1d19bbdbcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
