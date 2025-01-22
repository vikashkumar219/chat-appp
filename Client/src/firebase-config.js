// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbDzHZat5ngRNFthN6LXkaNw46ZwRXmOU",
  authDomain: "virtual-chat-app-207be.firebaseapp.com",
  projectId: "virtual-chat-app-207be",
  storageBucket: "virtual-chat-app-207be.firebasestorage.app",
  messagingSenderId: "36058025347",
  appId: "1:36058025347:web:73aefe4a8061ce93e07ab6",
  measurementId: "G-T8XCZJLCLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);