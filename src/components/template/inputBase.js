import React from 'react'
import styles from './inputBase.module.css'

export const InputBase = ({title, children, className}) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}