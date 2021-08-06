import React, { useEffect, useState } from 'react'
import { getFinancialRecord } from '../../helpers/data'
import { Balance } from '../template/balance'
import { LoadingAnimation } from '../template/loadingAnimation'
import { FinancialGraph } from './financialGraph'
import { LineButton } from '../template/lineButton'
import { Button } from '../template/button'
import { Card } from '../template/card'
import styles from './financialHistory.module.css'

export const FinancialHistory = () => {
  const [finance, setFinance] = useState(false)
  const [period, setPeriod] = useState('weekly')

  useEffect(() => {
    (async () => setFinance(await getFinancialRecord()))()
  }, [])

  return (
    <div>
      {
        finance ?
          <div className={styles.root}>
            <div className={styles.balance}>
              <Balance title={"Balance Actual"} symbol={"$"} amount={finance.balance} currency={finance.currency}></Balance>
              <Balance className={styles.smallb} title={"Total de dinero ganado"} symbol={"$"} amount={finance.total} currency={finance.currency}></Balance>
            </div>
            <Card className={styles.financeGraph}>
              <div className={styles.ribbonContainer}>
                <div className={styles.sp}></div>
                <LineButton activeClass={styles.active}>
                  <Button className={styles.action} onClick={() => setPeriod("weekly")}>Semana</Button>
                  <Button className={styles.action} onClick={() => setPeriod("monthly")}>Mes</Button>
                  <Button className={styles.action} onClick={() => setPeriod("yearly")}>Año</Button>
                </LineButton>
              </div>
              <FinancialGraph type={period}></FinancialGraph>
            </Card>
          </div>
          :
          <div className={styles.animation}>
            <LoadingAnimation></LoadingAnimation>
          </div>
      }
    </div>
  )
}