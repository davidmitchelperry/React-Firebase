import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
  apiKey: "AIzaSyD2-dzq83rj4B4DYdtxIWjbn7vvCZrK4Gc",
  authDomain: "react-gale.firebaseapp.com",
  databaseURL: "https://react-gale-default-rtdb.firebaseio.com",
  projectId: "react-gale",
  storageBucket: "react-gale.appspot.com",
  messagingSenderId: "805557445246",
  appId: "1:805557445246:web:77bc5029c290759dfc2e2f",
  measurementId: "G-6PWZE26BZM"
});


//const app = firebase.initializeApp({
//  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//  appId: process.env.REACT_APP_FIREBASE_APP_ID
//})

export const auth = app.auth()
export default app

