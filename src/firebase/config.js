import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVN7OFfC1cDSdvGk-Pu8bxqfuJLNjhNF8",
  authDomain: "e-comerce-402e5.firebaseapp.com",
  projectId: "e-comerce-402e5",
  storageBucket: "e-comerce-402e5.appspot.com", // ✅ corregido
  messagingSenderId: "173958251337",
  appId: "1:173958251337:web:4be1eba2da8bed17b31098",
  measurementId: "G-BMN6N2ZQHX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
