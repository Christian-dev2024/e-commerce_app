import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQM-Bel70ZNFiYktqwbF53_s5HDRCK6KA",
    authDomain: "e-commerce-app-7627b.firebaseapp.com",
    projectId: "e-commerce-app-7627b",
    storageBucket: "e-commerce-app-7627b.firebasestorage.app",
    messagingSenderId: "262430105546",
    appId: "1:262430105546:web:6480c9cb84339891e7f933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)