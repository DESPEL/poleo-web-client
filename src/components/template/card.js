import React from 'react'
import classNames from 'classnames'
import style from './card.module.css'

export const Card = ({className, children, ...props}) => {
    return (
        <div className={classNames(style.card, className)} {...props}>
          {children}
        </div>
    )
}