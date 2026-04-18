// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBIn4FGYCn3u2uCrvrcjYkwI6uCzoL7C0",
  authDomain: "problemhub-76fbf.firebaseapp.com",
  projectId: "problemhub-76fbf",
  storageBucket: "problemhub-76fbf.firebasestorage.app",
  messagingSenderId: "138908127292",
  appId: "1:138908127292:web:8ee821465df09575eb7339"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
