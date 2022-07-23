import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
// //these are for getting the firebase database
// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDG1f2riJeo92txh9ukjdyAx8d1JxVn5sQ",
    authDomain: "coz-store.firebaseapp.com",
    projectId: "coz-store",
    storageBucket: "coz-store.appspot.com",
    messagingSenderId: "416319577037",
    appId: "1:416319577037:web:dd1b235cfdd6b8fb1e8284"
  };

const firebaseApp = initializeApp(firebaseConfig);
//these are for the google authantication
export const auth = getAuth();


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };