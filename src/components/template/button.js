import classNames from 'classnames'
import React from 'react'
import styles from './button.module.css'

import {Card} from './card'

export const Button = ({className, children, ...props}) => {
  return (
    <Card className={classNames(styles.root, className)} {...props}>
      {children}
    </Card>
  )
}