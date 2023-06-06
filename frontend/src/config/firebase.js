import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAANDrHrHzLtfA1JYMzOq4k7EfOK0-dktI",
  authDomain: "blog-site-practice.firebaseapp.com",
  projectId: "blog-site-practice",
  storageBucket: "blog-site-practice.appspot.com",
  messagingSenderId: "552761905149",
  appId: "1:552761905149:web:5e20668aca15a5f984d394",
  measurementId: "G-JJMG7HBRE3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);