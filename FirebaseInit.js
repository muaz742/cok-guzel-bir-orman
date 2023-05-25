// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getFirestore, doc, setDoc  } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8X7aZp-yobL1XbDVzB95Uqh2gbQfsjUA",
    authDomain: "cokguzelbirorman.firebaseapp.com",
    projectId: "cokguzelbirorman",
    storageBucket: "cokguzelbirorman.appspot.com",
    messagingSenderId: "153890890009",
    appId: "1:153890890009:web:5c842300307da6dabba588",
    measurementId: "G-5TCEPCGJHF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db, doc, setDoc};