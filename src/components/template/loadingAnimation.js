import React from 'react'
import styles from './loadingAnimation.module.css'

import Loader from 'react-loader-spinner'

export const LoadingAnimation = () => {
  return (
    <div className={styles.weird}>
      <Loader type='MutatingDots' height={100} width={100}
        color="var(--secondary-text-color)"
        secondaryColor="var(--secondary-text-color)"></Loader>
    </div>
  )
}