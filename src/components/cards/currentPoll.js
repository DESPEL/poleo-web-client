import React from 'react'
// import styles from './currentPoll.module.css'

export const CurrentPoll = ({active, id}) => {
  return (
    <div>
      Current Poll {active}, id: {id}
    </div>
  )
}