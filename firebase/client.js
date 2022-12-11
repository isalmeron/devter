// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth
} from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1APtOQVTsyv0W6OrWTxCTe0taqelu74",
  authDomain: "facturaciontest-4b729.firebaseapp.com",
  projectId: "facturaciontest-4b729",
  storageBucket: "facturaciontest-4b729.appspot.com",
  messagingSenderId: "636381183298",
  appId: "1:636381183298:web:c410a0bba8d514d5b9dcdb",
  measurementId: "G-RWMKL76RDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
