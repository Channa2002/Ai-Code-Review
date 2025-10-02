// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD06cAX8KD0ZgyWD2TGsg5lfhKAKdXkNG4",
  authDomain: "ai-code-reviewer-6b64e.firebaseapp.com",
  projectId: "ai-code-reviewer-6b64e",
  storageBucket: "ai-code-reviewer-6b64e.firebasestorage.app",
  messagingSenderId: "913912480673",
  appId: "1:913912480673:web:cdb1b367d6a3a84eb101e0",
  measurementId: "G-JX36J9Y1NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);