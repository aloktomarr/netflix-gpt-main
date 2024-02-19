// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIti_838ReCoEaIhmv1QC9JhnixxFHuYI",
  authDomain: "netflix-28ecd.firebaseapp.com",
  projectId: "netflix-28ecd",
  storageBucket: "netflix-28ecd.appspot.com",
  messagingSenderId: "701512981333",
  appId: "1:701512981333:web:5fa69bc5ef732c882e2ddc",
  measurementId: "G-1Y3C8F42R3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
