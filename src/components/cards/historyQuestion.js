import React from 'react'
import { Card } from '../template/card'
import styles from './historyQuestion.module.css'

import { QuestionStatsChart } from './questionStatsChart'


export const HistoryQuestion = ({ poll, question }) => {
  return (
    <Card className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.chart}>
          <QuestionStatsChart answers={question.answers} title={question.title}></QuestionStatsChart>
        </div>
      </div>
    </Card>
  )
}