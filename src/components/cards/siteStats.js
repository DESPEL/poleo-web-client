import React, { useEffect, useState } from 'react'
import styles from './siteStats.module.css'

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { Card } from '../template/card'
import { Balance } from '../template/balance'
import { Divider } from '../template/divider'
import { getSiteData, getUserData } from '../../helpers/user'

const loadData = async (setStats, setBalance) => {
  const siteData = await getSiteData()
  setStats(siteData)
  const userData = await getUserData()
  setBalance(userData.data.finance.balance)
}

export const SiteStatsCard = () => {
  const [stats, setStats] = useState(false)
  const [balance, setBalance] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData(setStats, setBalance)
  }, [])

  useEffect(() => {
    if (stats !== false && balance !== false) {
      setLoading(false)
    }
  }, [stats, balance, loading])


  return (
    <Card className={styles.root}>
      <div className={styles.content}>
        {loading ?
          <div className={styles.weird}>
            <Loader type='MutatingDots' height={100} width={100}
              color="var(--secondary-text-color)"
              secondaryColor="var(--secondary-text-color)"></Loader>
          </div>
          :
          <div className={styles.subcontent}>
            <Balance
              title="Tu balance actual"
              symbol="$"
              amount={balance}
              currency="MXN"
            >
            </Balance>
            <Divider></Divider>
            <Balance
              title="Saldo pagado a los usuarios este mes"
              symbol="$"
              amount={stats.paid}
              currency="MXN"
            >
            </Balance>
            <Divider></Divider><Balance
              title="Cantidad de respuestas este mes"
              symbol=""
              amount={stats.answered}
              currency=""
            >
            </Balance>
          </div>
        }


      </div>
    </Card>
  )
}