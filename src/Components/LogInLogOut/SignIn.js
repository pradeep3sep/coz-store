import styles from './signUp.module.css'
import swal from 'sweetalert';
import { useDispatch} from "react-redux";
import { UiActions } from '../Store/UiReducer';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';
import useSignInWithGoogle from './useSignInWithGoogle';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [first, setfirst] = useState('')
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const SignInWithGoogle = useSignInWithGoogle(first)
    function googleLogin(e){
        setfirst(e.target.id);
    }
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
            dispatch(UiActions.setname(user.displayName));
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
                        <div className={styles[`social-login`]}>
                            <span className={styles[`social-label`]}>Or login with</span>
                            <ul className={styles.socials}>
                                <li onClick={googleLogin}><a href="#"><i id='facebook' className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-facebook`]}`}></i></a></li>
                                <li onClick={googleLogin}><a href="#"><i id='twitter' className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-twitter`]}`}></i></a></li>
                                <li onClick={googleLogin}>
                                    {/* <Link></Link> */}
                                    <a href="#">
                                        <i id='google' className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-google`]}`}></i>
                                    </a>
                                </li>
                            </ul>
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
