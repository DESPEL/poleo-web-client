import React from 'react'
import classNames from 'classnames'
import style from './card.module.css'

export const Card = ({className, children}) => {
    return (
        <div className={classNames(style.card, className)}>
            {children}
        </div>
    )
}