import styles from './signUp.module.css'

export default function SignUp() {
  return (
    <div className='p-t-100 p-b-20 bg_check'>
    <section className={`${styles.signup} ${styles[`p-t-50`]}`}>
            <div className={styles.container}>
                <div className={styles[`signup-content`]}>
                    <div className={styles[`signup-form`]}>
                        <h2 className={styles[`form-title`]}>Sign up</h2>
                        <form method="POST" className={styles[`register-form`]} id={styles[`register-form`]}>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="name"><i className={`${styles.icn} zmdi zmdi-account material-icons-name`}></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="email"><i className={`${styles.icn} zmdi zmdi-email`}></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="pass"><i className={`${styles.icn} zmdi zmdi-lock`}></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className={styles[`form-group`]}>
                                <label htmlFor="re-pass"><i className={`${styles.icn} zmdi zmdi-lock-outline`}></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
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
                        <a href="/" className={styles[`signup-image-link`]}>I am already member</a>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
