// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfdVnOhCgh4bHfDSBm8CH6b7rPohAnoMM",
  authDomain: "codescale-61395.firebaseapp.com",
  projectId: "codescale-61395",
  storageBucket: "codescale-61395.appspot.com",
  messagingSenderId: "266137629090",
  appId: "1:266137629090:web:d3d1a8ad04a60e7d8882fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase_auth = getAuth(app)
const db = getFirestore(app);


export {
    firebase_auth, 
    app,
    db,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  };