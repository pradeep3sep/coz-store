import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignInUsePassowrd() {
    const auth = getAuth();
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await signInWithEmailAndPassword(auth, "testpr@gmail.com", "1234567890");
          console.log(response);
        } catch (error) {
          switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
        }
    };

  return (
    <div onClick={handleSubmit}>-------------SignInUsePassowrd----------------</div>
  )
}
