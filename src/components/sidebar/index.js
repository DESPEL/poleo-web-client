import React from 'react'
import styles from './index.module.css'

import classNames from 'classnames'

import {Item} from './item'
import {ThemeChanger} from './themeChanger'
import { UserCard } from './userCard'
import {Logo} from './logo'

export const SideBar = ({user, className}) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>
                <UserCard user={user}></UserCard>
                <Logo></Logo>
            </div>
            <div className={styles.controls}>
                <Item to="/">Inicio</Item>
                <Item to="/answer">Contestar Encuestas</Item>
                <Item to="/history">Historial</Item>
                <Item to="/mypolls">Mis Encuestas</Item>
                <Item to="/claim">Canjear Recompensas</Item>
            </div>
            <div className={styles.theme}>
                <ThemeChanger></ThemeChanger>
            </div>
        </div>
    )
}

export const MockSideBar = ({className}) => {
  return (
      <div className={classNames(styles.root, className)}>
          <div className={styles.title}>
              <Logo></Logo>
          </div>
          <div className={styles.controls}>
              <Item to="/">Inicio</Item>
              <Item to="/answer">Contestar Encuestas</Item>
              <Item to="/history">Historial</Item>
              <Item to="/mypolls">Mis Encuestas</Item>
              <Item to="/claim">Canjear Recompensas</Item>
          </div>
          <div className={styles.theme}>
              <ThemeChanger></ThemeChanger>
          </div>
      </div>
  )
}