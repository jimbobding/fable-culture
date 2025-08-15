// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpciMZCViS_0Y0L3X5-DE2AxU6wi6kGy4",
  authDomain: "fable-914e1.firebaseapp.com",
  projectId: "fable-914e1",
  storageBucket: "fable-914e1.firebasestorage.app",
  messagingSenderId: "1999068364",
  appId: "1:1999068364:web:9923a99d85cdd2a4a33669",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage for use in your app
export const db = getFirestore(app);
export const storage = getStorage(app);
