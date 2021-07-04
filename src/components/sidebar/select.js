import React from 'react'
import styles from './select.module.css'

import classNames from 'classnames'

export const Select = ({checked}) => {
    return (
        <div className={classNames(styles.select, checked ? styles.checked : "")}></div>
    )
}