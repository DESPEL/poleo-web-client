import classNames from 'classnames'
import React from 'react'
import styles from './roundPicture.module.css'

export const RoundPicture = ({src, className}) => {
  return (
    <div className={classNames(styles.picture, className)}>
      <img src={src} alt="err" className={styles.pfp} />
    </div>
  )
}