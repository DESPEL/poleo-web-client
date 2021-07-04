import React from 'react'
import styles from './item.module.css'
import classNames from 'classnames'

import {Link, useLocation} from 'react-router-dom'

import { Card } from '../template/card'
import { Select } from './select'

export const Item = ({ children, className, to }) => {
  const location = useLocation()
  return (
    <Link to={to} className={styles.link}>
      <Card className={classNames(styles.item, className)}>
        <div className={styles.wrapper}>
          <div>
            <Select checked={location.pathname === to}></Select>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </Card>
    </Link>
  )
}