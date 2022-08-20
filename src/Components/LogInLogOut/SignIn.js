import styles from './signUp.module.css'
import swal from 'sweetalert';
import googleLogo from '../../images/googleicon.svg'
import { useDispatch} from "react-redux";
import { UiActions } from '../Store/UiReducer';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../Firebase/SignInWithGoogle_Firebase.js';
import { getAuth, signInWithEmailAndPassword,RecaptchaVerifier } from "firebase/auth";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();


    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth);


    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user,"google log user");
        createUserDocumentFromAuth(user)
        dispatch(UiActions.setname({displayName: user.displayName, email : user.email, photoURL : user.photoURL }));
            swal(`Welcome!`, `${user.displayName}`, "success");
            if (user.email) {
                navigate("/");
            }
    };
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setpassword(e.target.value)
    }

    function onsubmitHandler(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("userpr",user);
            dispatch(UiActions.setname({displayName: user.displayName, email : user.email, photoURL : user.photoURL }))
            swal(`Welcome Back!`, `${user.displayName}`, "success");
            if (user.email) {
                navigate("/");
            }
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
                // swal(`Hi User!`, `You are not registered with us`, "warning");
                swal({
                    title: "Hi User!",
                    text: "You are not registered with us!, Please SignUp",
                    icon: "warning",
                    button: "Sign Up",
                  }).then(()=>{
                    navigate("/SignUp");
                })
            }
            if (errorMessage === 'Firebase: Error (auth/network-request-failed).') {
                swal(`OOPS!`, `Please connect with Internet`, "warning");
            }
            console.log(errorMessage);
        });
            
    }

  return (
    <div className='p-t-100 p-b-20 bg_check'>
    <section className={`${styles.signup} ${styles[`p-t-50`]}`}>
            <div className={styles.container}>
                <div className={styles[`signin-content`]}>
                    <div className={styles[`signup-form`]}>
                        <h2 className={styles[`form-title`]}>Sign In</h2>
                        <form method="POST" className={styles[`register-form`]} id={styles[`register-form`]}>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="name"><i className={`${styles.icn} zmdi zmdi-email material-icons-name`}></i></label>
                                <input onChange={handleEmail} type="email" name="name" id="name" placeholder="Your Email"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="pass"><i className={`${styles.icn} zmdi zmdi-lock`}></i></label>
                                <input onChange={handlePassword} type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            {/* <div className={styles[`form-group`]}>
                                <input type="checkbox" name="agree-term" id="agree-term" className={styles[`agree-term`]}/>
                                <label htmlFor="agree-term" className={styles[`label-agree-term`]}><span><span></span></span>Remember me</label>
                            </div> */}
                            <div className={[styles[`form-group`], styles[`form-button`]]}>
                                <input onClick={onsubmitHandler} type="submit" name="signup" id="signup" className={styles[`form-submit`]} value="Log In"/>
                            </div>
                        </form>
                        <div className={` d-flex justify-content-center ${styles[`social-login`]}`}>
                        <div onClick={logGoogleUser} className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src={googleLogo} alt='google login'/>
                            </div>
                            <p className="btn-text"><b>Sign in with google</b></p>
                            </div>
                            {/* <span className={styles[`social-label`]}>Or login with</span> */}
                            {/* <ul className={styles.socials}>
                                <li onClick={googleLogin}><a href="#"><i id='facebook' className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-facebook`]}`}></i></a></li>
                                <li onClick={googleLogin}><a href="#"><i id='twitter' className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-twitter`]}`}></i></a></li>
                                <li onClick={googleLogin}>
                                    
                                    <a href="#">
                                        <i id='google' className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-google`]}`}></i>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className={styles[`signup-image`]}>
                        <figure><img src={require("./images/signin-image.jpg")} alt="sing up"/></figure>
                        <Link to="/signup" className={styles[`signup-image-link`]}>
                                Create an account
                        </Link>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
