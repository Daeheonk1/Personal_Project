// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIxuwMQp5DXBxHJ_FNg-3Al2a_UBJBk-Q",
  authDomain: "autism-support-network-01.firebaseapp.com",
  projectId: "autism-support-network-01",
  storageBucket: "autism-support-network-01.appspot.com",
  messagingSenderId: "290840988988",
  appId: "1:290840988988:web:51c34213a5801f3b60a239",
  measurementId: "G-YFGFQBW5T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
