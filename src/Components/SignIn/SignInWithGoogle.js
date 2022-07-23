import { signInWithGooglePopup, createUserDocumentFromAuth } from '../Firebase/SignInWithGoogle_Firebase.js';

  
  const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
    //   console.log(response);
      createUserDocumentFromAuth(user)
    };
  
    return (
      <div>
        <h1 className='p-t-200'>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };
  
  export default SignIn;