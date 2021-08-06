import React, { useState } from 'react'
import styles from './lineButton.module.css'

export const LineButton = ({children, activeClass}) => {
  children = !!children ? children : []
  const [active, setActive] = useState(0)

  const handled = children.map((element, i) => <div className={active === i ? activeClass : ""} onClick={() => setActive(i)} key={i}>{element}</div>)

  return (
    <div className={styles.root}>
      {handled}
    </div>
  )
}