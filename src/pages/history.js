import React, { useState } from 'react'
import styles from './history.module.css'

import { Template } from './template'
import { Card } from '../components/template/card'
import { FinancialHistory } from '../components/cards/financialHistory'
import { LiveResultsCard } from '../components/cards/liveResultsCard'
import { sides } from '../helpers/enums'

import { getMyPolls } from '../helpers/data'

import { HistoryQuestionContainer } from '../components/questions/historyQuestionContainer'

export const HistoryPage = () => {
  const [active, setActive] = useState(0)

  return (
    <Template>
      <Card className={styles.root}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.financialTitle}>
              <div className={styles.title}>
                Historial Financiero
              </div>
            </div>
            <div className={styles.history}>
              <FinancialHistory></FinancialHistory>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.answers}>
              <div className={styles.title}>
                Historial de encuestas
              </div>
              <LiveResultsCard
                active={active}
                setActive={setActive}
                tickPosition={sides.RIGHT}
                rootClassName={styles.historyList}></LiveResultsCard>
            </div>
            <div className={styles.results}>
              <div className={styles.title}>
                Resultados de la encuesta
              </div>
              <HistoryQuestionContainer
                active={active} dataLoader={getMyPolls}></HistoryQuestionContainer>
            </div>
          </div>
        </div>
      </Card>
    </Template>
  )
}