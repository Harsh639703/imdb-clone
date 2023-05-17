import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAS-b1wjX5wFyqKaHTNtO1ybmM2zZ-s62c",
    authDomain: "imdb-clone-c4d61.firebaseapp.com",
    projectId: "imdb-clone-c4d61",
    storageBucket: "imdb-clone-c4d61.appspot.com",
    messagingSenderId: "474676178715",
    appId: "1:474676178715:web:26780c124cdce78e816dbe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)