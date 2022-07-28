import { initializeApp } from 'firebase/app';
import  useState  from 'react';

//these are for the google and twitter authantication
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

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


// //this is for the google login
// const provider = new GoogleAuthProvider();
// //this is for the twitter login
// const provider_twitter = new TwitterAuthProvider();




//breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

const useSignInWithGoogle = async (loginType)=> {
  const [provider, setprovider] = useState('')
  if (loginType === 'google') {
    setprovider(new GoogleAuthProvider())
  }
  if (loginType === 'twitter') {
    setprovider(new TwitterAuthProvider())
  }
  console.log(loginType,"pro");
  //this is for select which google account you want to select
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    //these are for the google authantication
    const auth = getAuth();
    const signInWithSocialPopup = () => signInWithPopup(auth, provider);


    //these are for getting the firebase database
    const db = getFirestore();
  // if (loginType === 'facebook') {
    
  // }
  const { user } = await signInWithSocialPopup();
  //this is for storing the user data in firebase databse which signup with google


  //userAuth.uid provide the unique user id by google in reponse, it is document name
  //users is the collection name in firebase 
  const userDocRef = doc(db, 'users', user.uid);
  
  //user snapshot is the userdata which we are checking if exists or not, if not exist then create new one if exist the return the data
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
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
  
  
}

export default useSignInWithGoogle