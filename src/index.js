import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKp7gTWITTQETAWg5W4VG02gjvBOpC-24",
  authDomain: "libreria-los-3-mosqueteros.firebaseapp.com",
  projectId: "libreria-los-3-mosqueteros",
  storageBucket: "libreria-los-3-mosqueteros.appspot.com",
  messagingSenderId: "573977877298",
  appId: "1:573977877298:web:e7d0fd18142ebcf5c7952b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);