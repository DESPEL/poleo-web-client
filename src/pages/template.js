import React from 'react'
import styles from './template.module.css'

import { MockSideBar } from '../components/sidebar'

export const Template = ({user, children}) => {
  return (
    <div className={styles.raw}>
      <MockSideBar className={styles.sideSpace} user={user}></MockSideBar>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}