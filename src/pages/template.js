import React from 'react'
import styles from './template.module.css'

import classNames from 'classnames'

import { MockSideBar } from '../components/sidebar'

export const Template = ({user, children}) => {
  return (
    <div className={styles.raw}>
      <MockSideBar className={classNames(styles.sideSpace, "hidden")} user={user}></MockSideBar>
      <div className={styles.container}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}