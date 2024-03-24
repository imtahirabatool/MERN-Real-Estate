// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACl6GWZGJLiJXLpLbyxIs3cc7ZyBEbG3M",
  authDomain: "mern-estate12.firebaseapp.com",
  projectId: "mern-estate12",
  storageBucket: "mern-estate12.appspot.com",
  messagingSenderId: "9641656854",
  appId: "1:9641656854:web:702eac0c8e1e8862f7eb37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
