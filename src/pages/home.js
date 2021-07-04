import React from 'react'
import { SiteStatsCard } from '../components/cards/siteStats'
import styles from './home.module.css'

import { Template } from './template'

export const Home = () => {
  return (
    <Template>
      <SiteStatsCard></SiteStatsCard>
    </Template>
  )
}