import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvtki8xNEv5NhqkxX2u-KAJNmkhvGk9Ro",
    authDomain: "crud-846e1.firebaseapp.com",
    projectId: "crud-846e1",
    storageBucket: "crud-846e1.appspot.com",
    messagingSenderId: "591962975459",
    appId: "1:591962975459:web:6f17f7225448bfc00e29d6",
    measurementId: "G-VTSHC4YP1Z"
};

 const app:any = initializeApp(firebaseConfig);
 const db:any = getFirestore(app);
 const auth:any = getAuth(app); 

export { app, firebaseConfig, db, auth, signInWithEmailAndPassword };