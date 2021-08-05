import React from 'react'
import styles from './expand.module.css'

import classNames from 'classnames'

export const ExpandButton = ({ onClick, className, expanded }) => {
  return (
    <div>
      <div className={classNames(styles.root, className, expanded ? styles.noshow:'')} onClick={onClick}>
        <span className={styles.title}>Seguir Leyendo</span>
        <div>
          <span className={classNames(styles.icon, "iconify")} data-icon="akar-icons:chevron-down" data-inline="false"></span>
        </div>
      </div>
      <div className={classNames(styles.root, className, expanded ? '':styles.noshow)} onClick={onClick}>
        <span className={styles.title}>Ver Menos</span>
        <div>
          <span className={classNames(styles.icon, "iconify")} data-icon="akar-icons:chevron-up" data-inline="false"></span>
        </div>
      </div>
    </div>
  )
}