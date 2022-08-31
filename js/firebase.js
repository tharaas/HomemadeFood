// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5x7DAxNIARKUa9LyYzQW6qFVl-TGDF6M",
  authDomain: "homemade-food-2022.firebaseapp.com",
  projectId: "homemade-food-2022",
  storageBucket: "homemade-food-2022.appspot.com",
  messagingSenderId: "1039380704685",
  appId: "1:1039380704685:web:5b3c8d7a7316cb56224524",
  measurementId: "G-87W7BZ1G2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);