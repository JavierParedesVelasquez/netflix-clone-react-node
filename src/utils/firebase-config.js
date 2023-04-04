// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAW-vdd2qapab3tEnoR-6G2fGraAhK-3us",
  authDomain: "react-netflix-clone-db1b6.firebaseapp.com",
  projectId: "react-netflix-clone-db1b6",
  storageBucket: "react-netflix-clone-db1b6.appspot.com",
  messagingSenderId: "791111528765",
  appId: "1:791111528765:web:4889f1fa7720a0bb509554",
  measurementId: "G-5DYEDY4WR6"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);