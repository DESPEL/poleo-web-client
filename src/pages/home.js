import React, { useState } from 'react'
import { SiteStatsCard } from '../components/cards/siteStats'
import styles from './home.module.css'

import { Template } from './template'
import { LiveResultsCard } from '../components/cards/liveResultsCard'
import { HomeQuestionContainer } from '../components/questions/homeQuestionContainer'
import { RedirectNotLoggedIn } from '../components/helpers/redirectNotLoggedIn'

export const Home = () => {
  const [active, setActive] = useState(0)

  return (
    <Template>
    <RedirectNotLoggedIn></RedirectNotLoggedIn>
      <SiteStatsCard></SiteStatsCard>
      <div className={styles.spacer}></div>
      <div className={styles.content}>
        <div className={styles.questions}>
          <HomeQuestionContainer active={active}></HomeQuestionContainer>
        </div>
        <div className={styles.verticalSpacer}></div>
        <div className={styles.liveResults}>
          <LiveResultsCard active={active} setActive={setActive}>
            <div className={styles.title}>
              Resultados en Vivo
            </div>
          </LiveResultsCard>
        </div>
      </div>
    </Template>
  )
}