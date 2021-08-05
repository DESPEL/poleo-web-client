import React, { useEffect, useState } from 'react'

import {getPolls} from '../../helpers/data'
import { HistoryQuestion } from '../cards/historyQuestion'

export const HistoryQuestionContainer = ({active, dataLoader}) => {
  const [poll, setPoll] = useState({questions:[]})

  useEffect(() => {
    const fetchPoll = async () => { 
      const polls = await dataLoader()
      console.log(polls)
      setPoll(polls[active])
    }
    fetchPoll()
  }, [active])

  const questions = poll.questions.map((v, i) => <HistoryQuestion poll={poll} question={v} key={i}></HistoryQuestion>)

  return (
    <div>
      {questions}
    </div>
  )
}

HistoryQuestionContainer.defaultProps = {
  dataLoader: getPolls
}