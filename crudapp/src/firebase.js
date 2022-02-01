import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";




const firebaseConfig = {
    apiKey: "AIzaSyC9ToPyPpIoy2n3g2f4nlnbygJn9ZNp1Cc",
    authDomain: "react-firebase-auth-a2681.firebaseapp.com",
    projectId: "react-firebase-auth-a2681",
    storageBucket: "react-firebase-auth-a2681.appspot.com",
    messagingSenderId: "522973517069",
    appId: "1:522973517069:web:3a546697327a25659c8c44"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);
 const db =firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { auth, googleAuthProvider, facebookAuthProvider,db };