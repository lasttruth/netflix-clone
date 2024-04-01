// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2OauNIzV7o0mURDVk91tii23Mx0i-h6Q",
    authDomain: "netflix-clone-418404.firebaseapp.com",
    projectId: "netflix-clone-418404",
    storageBucket: "netflix-clone-418404.appspot.com",
    messagingSenderId: "1083218969985",
    appId: "1:1083218969985:web:e47b6723db3c3a52265480",
    measurementId: "G-VMGHEHJBJH"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }