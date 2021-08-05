import React from 'react'
import { InputBase } from './inputBase'
import styles from './textInput.module.css'

export const TextInput = ({title, ...props}) => {
  return (
    <InputBase title={title}>
      <input className={styles.input} type="text" {...props}/>
    </InputBase>
  )
}