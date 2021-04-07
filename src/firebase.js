import firebase from "firebase";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";
// import "firebase/firestore";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBCBhZzYzDwu6fv1FdKSC4xJ8MPYBO-Zjc",
//   authDomain: "instagram-clone-react-3bb26.firebaseapp.com",
//   projectId: "instagram-clone-react-3bb26",
//   storageBucket: "instagram-clone-react-3bb26.appspot.com",
//   messagingSenderId: "575689531974",
//   appId: "1:575689531974:web:5449967872c4c74c71a047",
//   measurementId: "G-B2BY8YTWYH",
// });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCBhZzYzDwu6fv1FdKSC4xJ8MPYBO-Zjc",
  authDomain: "instagram-clone-react-3bb26.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-3bb26-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-3bb26",
  storageBucket: "instagram-clone-react-3bb26.appspot.com",
  messagingSenderId: "575689531974",
  appId: "1:575689531974:web:5449967872c4c74c71a047",
  measurementId: "G-B2BY8YTWYH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
