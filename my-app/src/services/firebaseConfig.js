// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBywSb1Zf4ujSDGDKaLQF-d7dQNSnDpRzQ",
  authDomain: "myapp-66f4b.firebaseapp.com",
  databaseURL: "https://myapp-66f4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myapp-66f4b",
  storageBucket: "myapp-66f4b.appspot.com",
  messagingSenderId: "481671806253",
  appId: "1:481671806253:web:5e187fcaa5cdbdbea4e7a4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;