import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8F4TlJTCUH7bZxU56tydhRbW-J2EDs2E",

    authDomain: "daelius-40592.firebaseapp.com",
  
    projectId: "daelius-40592",
  
    storageBucket: "daelius-40592.appspot.com",
  
    messagingSenderId: "775567644852",
  
    appId: "1:775567644852:web:a193a43cf9009b76285fe1",
  
    measurementId: "G-VMK7TRPPFV"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

