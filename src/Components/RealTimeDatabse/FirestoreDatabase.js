
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import swal from 'sweetalert';


//!this part is here the intilization
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDG1f2riJeo92txh9ukjdyAx8d1JxVn5sQ",
    authDomain: "coz-store.firebaseapp.com",
    projectId: "coz-store",
    storageBucket: "coz-store.appspot.com",
    messagingSenderId: "416319577037",
    appId: "1:416319577037:web:dd1b235cfdd6b8fb1e8284"
};
const firebaseApp = initializeApp(firebaseConfig);
//! Intilization ends here

const auth = getAuth();
const db = getFirestore();

//this is for getting the user details from the firestore not from the auth.
export async function gettingUserDetailsfromFirestore(){
  try {
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) {
      console.log("Document data:", userSnapshot.data());
      return userSnapshot.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error,"this is the error from the gettingUserDetailsfromFirestore");
  }
}


//This is for adding item in the wishlist
export async function addItemWishlist(allwishlist) {
  try {
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) {
        try {
          await setDoc(userDocRef, {
            allwishlist : allwishlist
          },
          {
            merge: true
          });
          console.log("kr di ccheck kr");
        } catch (error) {
          console.log('error creating the user', error.message);
        }
    } else {
        alert("please login")
    }
  } catch (error){
    console.log(error);
  }
}

//this is for removing the item from the wishlist
export async function removeItemWishlist(products) {
  const userDocRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = await getDoc(userDocRef);
  let oldwishlist = [];
  if (docSnap.exists()) {
    oldwishlist = docSnap.data().allwishlist
    let newitems  = oldwishlist.items.filter((item)=> item.id !== products.id)
    let newWishlist = {
      TotalArticle : oldwishlist.TotalArticle -1,
      items : newitems
    }

    await setDoc(userDocRef, {
      allwishlist : newWishlist
    },
    {
      merge: true
    });
    console.log("kr di ccheck kr");


  } else {
    console.log("No such document!");
  }  
}
