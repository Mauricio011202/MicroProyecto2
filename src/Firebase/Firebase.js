// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbP7AD0I3JwGw1yCql68kVnwqQCBMfzw",
  authDomain: "micropoyecto2.firebaseapp.com",
  projectId: "micropoyecto2",
  storageBucket: "micropoyecto2.appspot.com",
  messagingSenderId: "473258874121",
  appId: "1:473258874121:web:ff4be2cb369ec266e02fd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider =   new GoogleAuthProvider()
googleProvider.setCustomParameters( {prompt : "select_account"})