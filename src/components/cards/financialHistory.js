import React, { useEffect, useState } from 'react'
import { getFinancialRecord } from '../../helpers/data'
import { Balance } from '../template/balance'
import { Card } from '../template/card'
import { LoadingAnimation } from '../template/loadingAnimation'
import styles from './financialHistory.module.css'

export const FinancialHistory = () => {
  const [finance, setFinance] = useState(false)

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
            <div className={styles.financeGraph}>
              <Card className={styles.graph}>
                <div>
                 Financial Graph asdf
                </div>
              </Card>
            </div>
          </div>
          :
          <div className={styles.animation}>
            <LoadingAnimation></LoadingAnimation>
          </div>
      }
    </div>
  )
}