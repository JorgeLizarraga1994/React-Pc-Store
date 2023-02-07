import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDRJnL3_5rjrQQxLasZ8hLD39qd1TNS67w",
    authDomain: "reactpcstore.firebaseapp.com",
    projectId: "reactpcstore",
    storageBucket: "reactpcstore.appspot.com",
    messagingSenderId: "700663258450",
    appId: "1:700663258450:web:d4067c62d48015812b2e8b"
};

const app = initializeApp(firebaseConfig);
export const initFirebase = () => app



