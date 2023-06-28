// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeWCmcRD8WmGqnWC5NB-UGvvgSMhMpBqM",
  authDomain: "login-summer.firebaseapp.com",
  projectId: "login-summer",
  storageBucket: "login-summer.appspot.com",
  messagingSenderId: "275239497496",
  appId: "1:275239497496:web:8d0d53f0bbecc22326b86d",
  measurementId: "G-NG7WL6RFPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
