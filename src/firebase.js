import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCBhZzYzDwu6fv1FdKSC4xJ8MPYBO-Zjc",
  authDomain: "instagram-clone-react-3bb26.firebaseapp.com",
  projectId: "instagram-clone-react-3bb26",
  storageBucket: "instagram-clone-react-3bb26.appspot.com",
  messagingSenderId: "575689531974",
  appId: "1:575689531974:web:5449967872c4c74c71a047",
  measurementId: "G-B2BY8YTWYH",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
