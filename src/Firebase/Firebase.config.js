// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVUxXXE7g_w0W7ZC_H5ZBTylMCt6167OE",
    authDomain: "auth-integration-d6ce9.firebaseapp.com",
    projectId: "auth-integration-d6ce9",
    storageBucket: "auth-integration-d6ce9.appspot.com",
    messagingSenderId: "446311651741",
    appId: "1:446311651741:web:59a57832b6247ddc333774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;