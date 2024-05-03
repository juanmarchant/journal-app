// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArdlqYy8sB6Yb5FueKMuDIsDnVfVp0KtM",
    authDomain: "react-cursos-b9adf.firebaseapp.com",
    projectId: "react-cursos-b9adf",
    storageBucket: "react-cursos-b9adf.appspot.com",
    messagingSenderId: "705567013216",
    appId: "1:705567013216:web:6dde1f490397b22c7d0605"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);