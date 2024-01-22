import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from  "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsbv_XJFa2fgJADSD9TNcPRxc5QDJZFbc",
  authDomain: "react-database-connectio-c0b4a.firebaseapp.com",
  projectId: "react-database-connectio-c0b4a",
  storageBucket: "react-database-connectio-c0b4a.appspot.com",
  messagingSenderId: "559913797774",
  appId: "1:559913797774:web:277006935758afd14061df",
  measurementId: "G-SXE0X60964"
};

const app = initializeApp(firebaseConfig);
export const googleProvider =  new GoogleAuthProvider();
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);