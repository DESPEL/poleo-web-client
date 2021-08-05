import React from 'react'
import styles from './progressBar.module.css'

export const ProgressBar = ({progress}) => {
  return (
    <div className={styles.root}>
      <div className={styles.progress} style={{flexGrow: parseInt(progress)}}></div>
      <div className={styles.spacer} style={{flexGrow: 100 - parseInt(progress)}}></div>
    </div>
  )
}