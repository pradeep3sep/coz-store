import React from 'react'
import styles from './InitialLoader.module.css'
function InitialLoader() {
  return (
    <div className={styles.loadeMain}>
    <div className={styles[`animsition-loading-1`]}>
        <div className={styles.loader05}></div>
    </div>
    </div>
  )
}

export default InitialLoader