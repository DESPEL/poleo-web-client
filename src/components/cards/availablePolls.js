import React, { useEffect, useState } from 'react'
import { LoadingAnimation } from '../template/loadingAnimation'
import { getAvailablePolls } from '../../helpers/data'
import styles from './availablePolls.module.css'
import { PollInfo } from './pollInfo'

export const AvailablePolls = ({active, setActive, setPollId}) => {
  const [polls, setPolls] = useState(false)

  useEffect(() => {
    const loadAvailablePolls = async () => {
      const polls = await getAvailablePolls()
      setPolls(polls)
      setPollId(polls[0].id)
    }
    loadAvailablePolls()
  }, [])

  const pollsInfo = (polls instanceof Array ? polls : []).map((v, i) => <PollInfo poll={v} key={i} active={i===active} onClick={()=>{setActive(i); setPollId(v.id)}}></PollInfo>);

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Encuestas por contestar
        </div>
        {
          polls instanceof Array ?
          <div className={styles.polls}>
          {pollsInfo}
        </div>
        :
        <div className={styles.loading}>
          <LoadingAnimation></LoadingAnimation>
        </div>
        }
      </div>
    </div>
  )
}