import React from 'react'
import styles from './pollInfo.module.css'

import { Card } from '../template/card'
import classNames from 'classnames'
import { RoundPicture } from '../template/roundPicture'

export const PollInfo = ({ poll, active, onClick }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <RoundPicture src={poll.pollster.img}></RoundPicture>
      <div className={styles.content}>
        <div className={styles.title}>
          {poll.title}
        </div>
        <div className={styles.extraInfo}>
          <div>
            <div className={styles.author}>
              Por: {poll.pollster.name}
              <div className={classNames(styles.verified, poll.isVerifiedPollster ? '':'noshow')}>
                <span className={classNames("iconify", styles.check)} data-icon="bi:check-lg" data-inline="false"></span>
              </div>
            </div>
            <div className={styles.duration}>
              {poll.timeInMinutes} {poll.timeInMinutes > 1 ? 'minutos' : 'minuto'}
            </div>
          </div>
          <Card className={styles.reward}>
            <span>
              + ${poll.reward.ammount} {poll.reward.currency}
            </span>
          </Card>
        </div>
      </div>
    </div>
  )
}