import React from 'react'
import styles from './logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src='/images/headerLogo.png' alt="poleo" className={styles.logo}></img>
    </div>
  )
}