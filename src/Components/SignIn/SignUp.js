// import { initializeApp } from 'firebase/app';
// const firebaseConfig = {
//     apiKey: "AIzaSyDG1f2riJeo92txh9ukjdyAx8d1JxVn5sQ",
//     authDomain: "coz-store.firebaseapp.com",
//     projectId: "coz-store",
//     storageBucket: "coz-store.appspot.com",
//     messagingSenderId: "416319577037",
//     appId: "1:416319577037:web:dd1b235cfdd6b8fb1e8284"
//   };

// const firebaseApp = initializeApp(firebaseConfig);

// TODO: Basically with store email and password in auth section of firebase which generate unique id against which we save first name, last name etc in databse.


//Basically it first check the auth(email and password) in authenticatiobn of firebase,
//if available returns the "already available" 
// if not the create the first the auth(email and passowrd) in auth database then save the login details in firestore database

//the string "users" is the collection name, it check if not available then create the new one with name "users"



import React from 'react'
//getAuth is to have access of "authentication" in firebse,
//createUserWithEmailAndPassword it is the method name which we use to authentication of firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// getFirestore is for accessing the firestore database, doc is to have access of all the content of database,
//getDoc is for the getting the all the value stored in the firebase
//setDoc is to update or save value in database
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// *!first have a look to the handleSubmit function
export default function SignUp() {
    const auth = getAuth();
    // console.log(auth,"It gives all the details of authentication of firestore, apikey and otherdetails");
    //*if not then uncomment the 1 to 11 line, basically initializefirebase here

    const createUserDocumentFromAuth = async ( userAuth, additionalInformation = {} ) => {
        //it gives acces to database
        const db = getFirestore();

        // if user is not authentic then return and don't perform anything
        //userAuth is basically "authencation" created or not, all details like email, uid and other things
        if (!userAuth) return;

        // if user is authentic then, go to the collection name users 
        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);
        //here we check that data is already created or not against the authentic email and password, if not then create the new one
        if (!userSnapshot.exists()) {
          const createdAt = new Date();
          try {
            await setDoc(userDocRef, {
              createdAt,
              ...additionalInformation,
            });
          } catch (error) {
            console.log('error creating the user', error.message);
          }
        }
        return userDocRef;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        //if the below is the form, then we use preventDefault.
        try {
          // In createUserWithEmailAndPassword, we pass the "const auth = getAuth();" and email and password
          //it checks and creates the "authentication" in firebase with mail and password 
          const { user } = await createUserWithEmailAndPassword(auth, "testpr@gmail.com", "1234567890");
        //   console.log(user,"it gives all the details like email,uid etc");
          createUserDocumentFromAuth(user, { "Name" : "pradeepKumarVerma basically all detail in object form", "Middle" : "Kumar" , "Last" : "verma"});
        // Here we pass all the details which we want save the firestore database
        // basically here we play with all data which we want to store in database
        //user is basically we pass details like email, uid and other things to verify the rest thing which we want to store
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
          }
        }
    };


  return (
    <button onClick={handleSubmit}>-----------SignUp---------------</button>
  )
}
