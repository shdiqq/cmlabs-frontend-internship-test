// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeADRGbfJRUC6WncM9sI6QtwsPccMyWH8",
  authDomain: "mealapp-2cee1.firebaseapp.com",
  projectId: "mealapp-2cee1",
  storageBucket: "mealapp-2cee1.appspot.com",
  messagingSenderId: "97430487354",
  appId: "1:97430487354:web:acf32c90cfe5408e641003"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };