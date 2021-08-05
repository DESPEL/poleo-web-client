import React, { useState } from 'react'
import { Card } from '../template/card'
import styles from './homeQuestion.module.css'
import { ExpandButton } from '../buttons/expand/expand'

import classNames from 'classnames'
import { QuestionStatsChart } from './questionStatsChart'

const MAX_DESC_LENGTH = 350

export const HomeQuestion = ({ poll, question }) => {
  const [expanded, setExpanded] = useState(false)
  const faded = question.description.length > MAX_DESC_LENGTH
  return (
    <Card className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {question.title}
        </div>
        <div className={styles.date}>
          {poll.start}
        </div>
        <div className={styles.chart}>
          <QuestionStatsChart answers={question.answers}></QuestionStatsChart>
        </div>
        <div className={styles.description}>
          <div className={classNames(styles.content, faded ? '' : styles.normal, faded && !expanded ? styles.faded : '')}>
            {question.description}
          </div>
          <div className={classNames(styles.expand, faded ? '' : 'noshow')}>
            <ExpandButton onClick={() => setExpanded(!expanded)} expanded={expanded}></ExpandButton>
          </div>
        </div>
      </div>
    </Card>
  )
}