
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


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
      // console.log("Document data:", userSnapshot.data());
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

//this is for adding the cart item
export async function addItemInCart(allcart) {
  try {
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    const userSnapshot = await getDoc(userDocRef);
    // console.log("userSnapshot",userSnapshot);
    if (userSnapshot.exists()) {
        try {
          await setDoc(userDocRef, {
            Cart : allcart
          },
          {
            merge: true
          });
          console.log("cart add kr di ccheck kr");
        } catch (error) {
          console.log('error creating the cart', error.message);
        }
    } else {
        alert("please login")
    }
  } catch (error){
    console.log(error);
  }
}

export async function removeItemInCart(products) {
  const userDocRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = await getDoc(userDocRef);
  let oldCart = [];
  if (docSnap.exists()) {
    oldCart = docSnap.data().Cart
    let newitems  = oldCart.items.filter((item)=> item.id !== products.id)
    console.log("newitems",newitems);
    let newCart = {
      TotalArticle : oldCart.TotalArticle -1,
      items : newitems,
      TotalPrice: oldCart.TotalPrice - (products.Quantity * products.Price.mrpprice)
    }

    await setDoc(userDocRef, {
      Cart : newCart
    },
    {
      merge: true
    });
    console.log("kr di ccheck kr");
  } else {
    console.log("No such document!");
  }  
}

export async function changeQtyInCart(typeNdetails){
  console.log("im called");
  const userDocRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = await getDoc(userDocRef);
  let oldCart = [];
  if (docSnap.exists()) {
    oldCart = docSnap.data().Cart;
    let updateArticle = ''
    const restArticle = oldCart.items.filter((item)=> item.id !== typeNdetails.id && item.Size !== typeNdetails.Size)
    if (typeNdetails.needAction === 'increaseQty') {
      updateArticle = oldCart.items.find((item)=> item.id === typeNdetails.id && item.Size === typeNdetails.Size)
      updateArticle.Quantity++;

      // if (updateArticle.Quantity < 2) {
      //   state.items = state.items.filter((item)=> item.id !== changeArticle.id || item.Size !== changeArticle.Size)
      //   state.TotalArticle--;
      // } else {
      // }
    } else {

    }
    await setDoc(userDocRef, {
      Cart : [updateArticle,...restArticle]
    },
    {
      merge: true
    });
    console.log("kr di ccheck kr");
  } else {
    console.log("No such document!");
  }  
}