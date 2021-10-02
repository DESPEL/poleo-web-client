import React, { useState } from 'react'
import styles from './myPolls.module.css'
import { Template } from './template'
import { Card } from '../components/template/card'
import { LiveResultsCard } from '../components/cards/liveResultsCard'
import { sides } from '../helpers/enums'

import classNames from 'classnames'
import { RedirectNotLoggedIn } from '../components/helpers/redirectNotLoggedIn'

export const MyPollsPage = ({ user }) => {
  const [active, setActive] = useState(0)
  return (
    <Template>
      <RedirectNotLoggedIn></RedirectNotLoggedIn>
      <Card className={styles.root}>
        <div className={styles.wrapper}>
          <div className={classNames(styles.mypolls, styles.content)}>
            <div className={styles.title}>
              Mis Encuestas
            </div>
            <div className={styles.ribbon}>
              Activas
            </div>
            <div className={styles.content}>
              <LiveResultsCard
                active={active}
                setActive={setActive}
                tickPosition={sides.RIGHT}
                rootClassName={styles.historyList}></LiveResultsCard>
            </div>
          </div>
          <div className={classNames(styles.results, styles.content)}>
            <div className={styles.title}>
              Resultados
            </div>
            <div className={styles.resultList}>

            </div>
          </div>
        </div>
      </Card>
    </Template>

  )
}