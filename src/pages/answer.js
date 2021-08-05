import React, { useState } from 'react'
import { Card } from '../components/template/card'
import styles from './answer.module.css'
import { Template } from './template'

import { AvailablePolls } from '../components/cards/availablePolls'
import { CurrentPoll } from '../components/cards/currentPoll'

export const AnswerPage = () => {
  const [active, setActive]  = useState(0)
  const [pollId, setPollId] = useState('')
  
  return (
    <Template>
      <Card className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.availablePolls}>
            <AvailablePolls active={active} setActive={setActive} setPollId={setPollId}></AvailablePolls>
          </div>
          <div className={styles.currentPoll}>
            <CurrentPoll active={active} id={pollId}></CurrentPoll>
          </div>
        </div>
      </Card>
    </Template>
  )
}