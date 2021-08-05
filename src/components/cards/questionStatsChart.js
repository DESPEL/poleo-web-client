import React, { useEffect, useState } from 'react'
import { Card } from '../template/card'
import styles from './questionStatsChart.module.css'

import { Bar } from 'react-chartjs-2'
import classNames from 'classnames'
import { uniqueId } from '../../helpers'


const HIGHTLIGHT_COLOR = '#12E57A'

export const QuestionStatsChart = ({ className, answers, title, showTitle }) => {
  const options = {
    indexAxis: 'y',
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
    labels: Object.keys(answers),
    datasets: [
      {
        data: Object.values(answers),
        backgroundColor: 'rgba(18, 229, 122, 0.4)',
        borderColor: 'rgba(18, 229, 122, 1)',
        barThickness: 22,
        borderWidth: 3,
      },
    ],
  };

  const [id, _] = useState(uniqueId('qsc'))

  useEffect(() => {
    const element = document.getElementById(id)
    element.style.height = `${Object.values(answers).length * (25 + 32) + 25}px`
  })


  return (
    <Card className={classNames(styles.root, className)}>
      <div className={styles.title}>
        {title}
      </div>
      <div id={id}>
        <Bar data={data} options={options}></Bar>
      </div>
    </Card>
  )
}

QuestionStatsChart.defaultProps = {
  showTitle: false
}