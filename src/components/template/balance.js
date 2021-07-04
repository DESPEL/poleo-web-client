import React from 'react'
import styles from './balance.module.css'

export const Balance = ({title, symbol, amount, currency}) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        <div className={styles.symbol}>
          {symbol}
        </div>
        <div className={styles.amount}>
          {amount}
        </div>
        <div className={styles.currency}>
          {currency}
        </div>
      </div>
    </div>
  )
}