// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "food-delivery-2d778.firebaseapp.com",
  projectId: "food-delivery-2d778",
  storageBucket: "food-delivery-2d778.firebasestorage.app",
  messagingSenderId: "1046284114716",
  appId: "1:1046284114716:web:0af6b092d937972f7ef8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}