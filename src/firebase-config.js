import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDheRrEObBB1vIunhs9kUKI4n8mMUhzU7Q",
  
    authDomain: "examen-5a92c.firebaseapp.com",
  
    projectId: "examen-5a92c",
  
    storageBucket: "examen-5a92c.firebasestorage.app",
  
    messagingSenderId: "1008688680387",
  
    appId: "1:1008688680387:web:650a4104657f5439c44176"
  
  };
  


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;
