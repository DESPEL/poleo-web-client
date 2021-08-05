import React, { useEffect, useState } from 'react'
import styles from './homeQuestionContainer.module.css'

import {getPolls} from '../../helpers/data'
import { HomeQuestion } from '../cards/homeQuestion'

export const HomeQuestionContainer = ({active, dataLoader}) => {
  const [poll, setPoll] = useState({questions:[]})

  useEffect(() => {
    const fetchPoll = async () => { 
      const polls = await dataLoader()
      setPoll(polls[active])
    }
    fetchPoll()
  }, [active])

  const questions = poll.questions.map((v, i) => <HomeQuestion poll={poll} question={v} key={i}></HomeQuestion>)

  return (
    <div>
      {questions}
    </div>
  )
}

HomeQuestionContainer.defaultProps = {
  dataLoader: getPolls
}