import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD42XqtviR6KSjYkoVjpr_vaaX0rZzIvJo",
  authDomain: "my-chat-7b5c6.firebaseapp.com",
  projectId: "my-chat-7b5c6",
  storageBucket: "my-chat-7b5c6.appspot.com",
  messagingSenderId: "116302261261",
  appId: "1:116302261261:web:2c759f41a505237fbaf944",
  measurementId: "G-ZN4HCBV63V"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();