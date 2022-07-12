// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTcuMznENZkk5Z4PgtzLjoy0CuGwG955A",
  authDomain: "partnerhero-84cfc.firebaseapp.com",
  projectId: "partnerhero-84cfc",
  storageBucket: "partnerhero-84cfc.appspot.com",
  messagingSenderId: "141926559393",
  appId: "1:141926559393:web:1b79bcfa593fce9baf0ae0"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export default app
export { db }