import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUWBfpN8eEslVAok6A4KqWfR16x3LE2Qg",
  authDomain: "hyper-card.firebaseapp.com",
  projectId: "hyper-card",
  storageBucket: "hyper-card.appspot.com",
  messagingSenderId: "88905218781",
  appId: "1:88905218781:web:30dedda14122abf022f934",
  measurementId: "G-MJE2HGHMBF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);