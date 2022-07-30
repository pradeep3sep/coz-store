import styles from './signUp.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch} from "react-redux";
import { UiActions } from '../Store/UiReducer';
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = getAuth();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const createUserDocumentFromAuth = async ( userAuth, additionalInformation = {} ) => {
      const db = getFirestore();
      if (!userAuth) return;
      const userDocRef = doc(db, 'users', userAuth.uid);
      const userSnapshot = await getDoc(userDocRef);
      if (!userSnapshot.exists()) {
        const createdAt = new Date();
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
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
    
        if (password !== confirmPassword) {
          alert("passwords do not match");
          return;
        }
        if (confirmPassword.length < 7) {
          alert("Password should be at least 6 characters (auth/weak-password).");
        }
        if (!email || !password) return;
    
        try {
          const { user } = await createUserWithEmailAndPassword(auth, email, password)
          await updateProfile(auth.currentUser, { displayName: displayName }).catch(
            (err) => console.log(err)
          );
          createUserDocumentFromAuth(user, {...formFields});
          dispatch(UiActions.setname({displayName: user.displayName, email : user.email }));
          resetFormFields();
            navigate("/");
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            alert("Cannot create user, email already in use");
          } else {
            console.log("user creation encountered an error", error);
          }
        }
    };



  return (
    <div className='p-t-100 p-b-20 bg_check'>
    <section className={`${styles.signup} ${styles[`p-t-50`]}`}>
            <div className={styles.container}>
                <div className={styles[`signin-content`]}>
                    <div className={styles[`signup-form`]}>
                        <h2 className={styles[`form-title`]}>Sign up</h2>
                        <form method="POST" onSubmit={handleSubmit} className={styles[`register-form`]} id={styles[`register-form`]}>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="name"><i className={`${styles.icn} zmdi zmdi-account material-icons-name`}></i></label>
                                <input onChange={handleChange} type="text" name="displayName" id="name" placeholder="Your Name"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                 <label htmlFor="email"><i className={`${styles.icn} zmdi zmdi-email`}></i></label>
                                 <input onChange={handleChange} type="email" name="email" id="email" placeholder="Your Email"/>
                             </div>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="pass"><i className={`${styles.icn} zmdi zmdi-lock`}></i></label>
                                <input onChange={handleChange} type="password" name="password" id="pass" placeholder="Password"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                 <label htmlFor="re-pass"><i className={`${styles.icn} zmdi zmdi-lock-outline`}></i></label>
                                 <input onChange={handleChange} type="password" name="confirmPassword" id="re_pass" placeholder="Repeat your password"/>
                             </div>
                             <div className={styles[`form-group`]}>
                                 <input type="checkbox" name="agree-term" id="agree-term" className={styles[`agree-term`]}/>
                                 <label htmlFor="agree-term" className={styles[`label-agree-term`]}><span><span></span></span>I agree all statements in  <a href="/" className={styles[`term-service`]}>Terms of service</a></label>
                           </div>
                             <div className={[styles[`form-group`], styles[`form-button`]]}>
                                <input type="submit" name="signup" id="signup" className={styles[`form-submit`]} value="Register"/>
                             </div>
                        </form>
                        
                    </div>
                    <div className={styles[`signup-image`]}>
                        <figure><img src={require("./images/signup-image.jpg")} alt="sing up"/></figure>
                        <Link to='/login' className={styles[`signup-image-link`]}>
                            I am already member
                        </Link>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
