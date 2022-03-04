import { initializeApp } from "@firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  onAuthStateChanged,
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7hS1sUgAUPNW1REWgRvuYbLq8D_6-Its",

  authDomain: "clone-a4070.firebaseapp.com",

  projectId: "clone-a4070",

  storageBucket: "clone-a4070.appspot.com",

  messagingSenderId: "207882890538",

  appId: "1:207882890538:web:72256f8295d0ec99e98253"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "posts");
const auth = getAuth();

export {
  onAuthStateChanged,
  updateProfile,
  colRef,
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
