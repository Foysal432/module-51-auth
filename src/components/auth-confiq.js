// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ5ZYvl9vysNjQLbb4PVVF3dZf1EfIoX4",
  authDomain: "module-51-auth.firebaseapp.com",
  projectId: "module-51-auth",
  storageBucket: "module-51-auth.appspot.com",
  messagingSenderId: "619544985606",
  appId: "1:619544985606:web:e54bb418fea6f5bf8c0387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth