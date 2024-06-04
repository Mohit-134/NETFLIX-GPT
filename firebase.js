// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWBbdYB3jkMPcdI2H0f4G9-Xj_uzD3VLk",
  authDomain: "netflix-gpt-7f38c.firebaseapp.com",
  projectId: "netflix-gpt-7f38c",
  storageBucket: "netflix-gpt-7f38c.appspot.com",
  messagingSenderId: "906487039866",
  appId: "1:906487039866:web:11d9cc1b59aacb20fc38c3",
  measurementId: "G-VBD5KBRWYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();