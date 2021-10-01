import { type } from 'language-tags'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { getFinancialRecord } from '../../helpers/data'
import { Card } from '../template/card'
import styles from './financialGraph.module.css'

const TIMEZONE_OFFSET = (new Date).getTimezoneOffset() * 60 * 1000

const year = (new Date()).getFullYear()
const month = (new Date()).getMonth()
const day = (new Date()).getDate()
const dayOfTheWeek = (new Date()).getDay()
const currentTime = (new Date()).getTime()

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const spanTypes = {
  weekly: {
    length: () => 7,
    step: (i) => (new Date(year, month, day - dayOfTheWeek + i)).getTime(),
    label: (moment) => days[(new Date(moment)).getDay()],
  },
  monthly: {
    length: () => (new Date(year, month, 0)).getDate(),
    step: (i) => (new Date(year, month, i)).getTime()  - TIMEZONE_OFFSET,
    label: (moment) => (new Date(moment)).getDate(),
  },
  yearly: {
    length: () => 12,
    step: (i) => (new Date(year, i, 1)).getTime(),
    label: (moment) => months[(new Date(moment-1)).getMonth()]
  }
}

const createTimespan = (type) => {
  let data = (new Array(type.length()))
    .fill(0)
    .map((_, i) => i + 1)
    .map((v) => ({ moment: type.step(v), value: null }))
  return {
    data: data,
    start: data[0].moment,
    end: data[data.length-1].moment
  }
}

const deltaToAbsolute = (record, balance) => {
  record.sort((a, b) => b.date - a.date)
  record = record.map((data) => {
    balance -= data.movement
    return {
      moment: data.date,
      value: balance + data.movement,
    }
  })
  record.sort((a, b) => a.date - b.date)
  return record
}

const normalizeRecord = (rawRecordData, spanType) => {
  const span = createTimespan(spanType)
  const data = span.data
  const records = deltaToAbsolute(rawRecordData.record, rawRecordData.balance)

  let moment = 0
  for (let i = 0, j = 0; i < data.length && moment < currentTime; i++) {
    moment = data[i].moment
    while (records[j].moment > data[i].moment) {
      if (j === records.length - 1)
        break
      j += 1
    }
    data[i].value = records[j].value
  }

  const normalizedRecords = data
    .filter(({ value }) => value !== null)
    .map(({ moment, value }) => [moment, value])
    .reduce((prev, curr) => [[...prev[0], curr[0]], [...prev[1], curr[1]]], [[], []])
  const complementRecords = data
    .filter(({value}) => value === null)
    .map(({moment, value}) => [moment, normalizedRecords[1][normalizedRecords[1].length-1]])
    .reduce((prev, curr) => [[...prev[0], curr[0]], [...prev[1], curr[1]]], [[], []])

  return {
    start: span.start,
    end: span.end,
    axisX: normalizedRecords[0].map(spanType.label),
    axisY: normalizedRecords[1],
    cAxisX: complementRecords[0].map(spanType.label),
    cAxisY: complementRecords[1],
  }
}

export const FinancialGraph = ({type}) => {
  const [financialRecord, setFinancialRecord] = useState({
    start: 0,
    end: 0,
    axisX: ['loading'],
    axisY: [0],
    cAxisX: [],
    cAxisY: [],
  })

  useEffect(() => {
    const loadData = async () => {
      const history = await getFinancialRecord()
      const record = normalizeRecord(history, spanTypes[type])
      
      setFinancialRecord(record)
    }
    loadData()
  }, [type])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  const data = {
    labels: [...financialRecord.axisX, ...financialRecord.cAxisX],
    datasets: [
      {
        label: "",
        data: financialRecord.axisY,
        backgroundColor: 'rgba(18, 229, 122, 0.4)',
        borderColor: 'rgba(18, 229, 122, 1)',
        fill: true,
        tension: 0.3,
        borderWidth: 3,
      },
      {
        label: " ",
        data: [...financialRecord.axisY, ...financialRecord.cAxisY],
        backgroundColor: 'rgba(155, 155, 155, 0.4)',
        borderColor: 'rgba(155, 155, 155, 0.4)',
        fill: false,
        tension: 0.3,
        borderWidth: 3,
      },
    ],
  };



  return (
    <div className={styles.graph}>
    <Line data={data} options={options}></Line>
    </div>
  )
}