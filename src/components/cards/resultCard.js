import React from 'react'
import styles from './resultCard.module.css'

import { Card } from '../template/card'
import { ProgressBar } from '../template/progressBar'
import classNames from 'classnames'
import { sides } from '../../helpers/enums'

export const ResultCard = ({ active, title, created, numAnswers, reqAnswers, tickPosition }) => {
  return (
    <Card className={classNames(styles.root, active ? styles.active : "")}>
      <div className={styles.rootContent}>
        <div className={classNames(styles.arrow, (tickPosition !== sides.LEFT || !active) ? "hidden": "")}>
          <span className={classNames("iconify")} data-icon="akar-icons:chevron-left" data-inline="false"></span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.date}>
              Iniciada el: {created}
            </div>
          </div>
          <div className={styles.progress}>
            <ProgressBar progress={numAnswers / reqAnswers * 100}></ProgressBar>
          </div>
          <div className={styles.content}>
            <div className={styles.answers}>
              {numAnswers} / {reqAnswers} respuestas
            </div>
          </div>
        </div>
        <div className={classNames(styles.arrow, (tickPosition !== sides.RIGHT || !active) ? "hidden": "")}>
          <span className={classNames("iconify")} data-icon="akar-icons:chevron-right" data-inline="false"></span>
        </div>
      </div>
    </Card>
  )
}

ResultCard.defaultProps = {
  tickPosition: sides.LEFT
}