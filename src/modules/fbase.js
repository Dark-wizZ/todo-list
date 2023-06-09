import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import {getFirestore, doc, collection, setDoc, getDoc, addDoc} from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDer4rai4zT2EIhs6z_LzFJVh7hjs8oCkk",

  authDomain: "to-do-d4d13.firebaseapp.com",

  projectId: "to-do-d4d13",

  storageBucket: "to-do-d4d13.appspot.com",

  messagingSenderId: "974586396495",

  appId: "1:974586396495:web:585459ed870d9bab7a8f3a"

};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {app, auth, provider, onAuthStateChanged,signInWithPopup,signOut, db,
  doc, collection, setDoc, getDoc, addDoc}