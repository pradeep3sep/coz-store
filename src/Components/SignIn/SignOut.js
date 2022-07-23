import React from 'react'
import { getAuth, signOut} from "firebase/auth";

export default function SignOut() {
    const auth = getAuth();
    const signOutHandler = async () => {
        await signOut(auth).then((response) => {
            // Sign-out successful.
            console.log(response,"log out");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    };

  return (
    <div onClick={signOutHandler}>----------------SignOut----------------</div>
  )
}
