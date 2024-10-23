// Firebase configuration and authentication initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJsCm2J-4J8hWNXgyvc1VZJkK73h6ndH4",
    authDomain: "loginauthentication-f0e2c.firebaseapp.com",
    projectId: "loginauthentication-f0e2c",
    storageBucket: "loginauthentication-f0e2c.appspot.com",
    messagingSenderId: "1076898118731",
    appId: "1:1076898118731:web:b35106d52f60eb176da1ce",
    measurementId: "G-T11YW4BZP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
