import { initializeApp } from 'firebase/app';

//these are for the google authantication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

//these are for getting the firebase database
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDG1f2riJeo92txh9ukjdyAx8d1JxVn5sQ",
    authDomain: "coz-store.firebaseapp.com",
    projectId: "coz-store",
    storageBucket: "coz-store.appspot.com",
    messagingSenderId: "416319577037",
    appId: "1:416319577037:web:dd1b235cfdd6b8fb1e8284"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});


//these are for the google authantication
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


//these are for getting the firebase database
export const db = getFirestore();

//this is for storing the user data in firebase databse which signup with google
export const createUserDocumentFromAuth = async (userAuth) => {

    //userAuth.uid provide the unique user id by google in reponse, it is document name
    //users is the collection name in firebase 
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    //user snapshot is the userdata which we are checking if exists or not, if not exist then create new one if exist the return the data
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };