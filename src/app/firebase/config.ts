// これはfirebaseの設定ファイルです。
// firebaseで利用するサービスの初期化を行います。

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCormcQhU7kIFGYhipbuVcFlMm6F0amn4Y",
  authDomain: "muichat-2e5d7.firebaseapp.com",
  projectId: "muichat-2e5d7",
  storageBucket: "muichat-2e5d7.firebasestorage.app",
  messagingSenderId: "332051909849",
  appId: "1:332051909849:web:f8c4b274fd18c0941442c8"
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
