import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAvtki8xNEv5NhqkxX2u-KAJNmkhvGk9Ro",
    authDomain: "crud-846e1.firebaseapp.com",
    projectId: "crud-846e1",
    storageBucket: "crud-846e1.appspot.com",
    messagingSenderId: "591962975459",
    appId: "1:591962975459:web:6f17f7225448bfc00e29d6",
    measurementId: "G-VTSHC4YP1Z"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Thêm dòng này để khởi tạo đối tượng auth

export { app, firebaseConfig, db, auth };