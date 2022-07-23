import { signInWithGooglePopup, createUserDocumentFromAuth } from '../Firebase/SignInWithGoogle_Firebase.js';
import SignInUsePassowrd from './SignInUsePassowrd.js';
import SignOut from './SignOut.js';
import SignUpForm from './SignUp.js';

  
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
        <SignUpForm/>
        <SignInUsePassowrd/>
        <SignOut/>
      </div>
    );
  };
  
  export default SignIn;