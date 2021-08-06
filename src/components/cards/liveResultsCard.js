import React, { useEffect, useState } from 'react'
import styles from './liveResultsCard.module.css'

import { Card } from '../template/card'

import { ResultCard } from './resultCard'
import { getPolls } from '../../helpers/data'

import { LoadingAnimation }  from '../template/loadingAnimation'
import classNames from 'classnames'

export const LiveResultsCard = ({active, setActive,  dataLoader, tickPosition, children, rootClassName}) => {
  const [polls, setPolls] = useState([])

  useEffect(() => {
    const loadPolls = async () => {
      const polls = await dataLoader()
      setPolls(polls)
    }
    loadPolls()
  }, [dataLoader])

  const pollElements = polls.map(
    (v, i) => <div 
        key={i} data-key={i}
        className={styles.pollElement} 
        onClick={(e) => setActive(parseInt(e.currentTarget.getAttribute('data-key')))}>
        <ResultCard 
          active={parseInt(i) === active} 
          title={v.title} 
          created={v.start} 
          numAnswers={v.answered} 
          reqAnswers={v.required}
          tickPosition={tickPosition}></ResultCard>
      </div>
    )

  return (
    <Card className={classNames(styles.root, rootClassName)}>
      <div className={styles.content}>
        {children}
        <div className={styles.spacer}></div>
        {polls.length !== 0 ? pollElements : <LoadingAnimation></LoadingAnimation>}
      </div>
    </Card>
  )
}

LiveResultsCard.defaultProps = {
  dataLoader: getPolls
}