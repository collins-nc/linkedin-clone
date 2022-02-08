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
  apiKey: "AIzaSyDROBlC_gd9al8RBnHSQ6PqqnmhgLwOLsg",
  authDomain: "linkedin-clone-76f1f.firebaseapp.com",
  projectId: "linkedin-clone-76f1f",
  storageBucket: "linkedin-clone-76f1f.appspot.com",
  messagingSenderId: "876129266810",
  appId: "1:876129266810:web:39b9e7d0f0ad97be161fc3",
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
