import styles from './signUp.module.css'

export default function SignIn() {
  return (
    <div className='p-t-100 p-b-20 bg_check'>
    <section className={`${styles.signup} ${styles[`p-t-50`]}`}>
            <div className={styles.container}>
                <div className={styles[`signin-content`]}>
                    <div className={styles[`signup-form`]}>
                        <h2 className={styles[`form-title`]}>Sign In</h2>
                        <form method="POST" className={styles[`register-form`]} id={styles[`register-form`]}>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="name"><i className={`${styles.icn} zmdi zmdi-account material-icons-name`}></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="pass"><i className={`${styles.icn} zmdi zmdi-lock`}></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                <input type="checkbox" name="agree-term" id="agree-term" className={styles[`agree-term`]}/>
                                <label htmlFor="agree-term" className={styles[`label-agree-term`]}><span><span></span></span>Remember me</label>
                            </div>
                            <div className={[styles[`form-group`], styles[`form-button`]]}>
                                <input type="submit" name="signup" id="signup" className={styles[`form-submit`]} value="Log In"/>
                            </div>
                        </form>
                        <div className={styles[`social-login`]}>
                            <span className={styles[`social-label`]}>Or login with</span>
                            <ul className={styles.socials}>
                                <li><a href="/"><i className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-facebook`]}`}></i></a></li>
                                <li><a href="/"><i className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-twitter`]}`}></i></a></li>
                                <li><a href="/"><i className={`${styles[`display-flex-center`]} zmdi ${styles[`zmdi-google`]}`}></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles[`signup-image`]}>
                        <figure><img src={require("./images/signin-image.jpg")} alt="sing up"/></figure>
                        <a href="/" className={styles[`signup-image-link`]}>Create an account</a>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
