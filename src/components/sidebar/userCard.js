import React from 'react'
import styles from './userCard.module.css'

import { Link } from 'react-router-dom'

export const UserCard = ({user}) => {
  const pfp = user.data.personalInfo.profilePhoto
  const username = user.id // TODO: Get Username From User Object
  console.log(user)
	return (
		<div className={styles.userCard}>
			<div className={styles.picContainer}>
				<img className={styles.profilePic} src={pfp} alt="err"/>
			</div>
			<div className={styles.userInfo}>
				<div className={styles.userName}>
					{username}
				</div>
				<div className={styles.viewProfile}>
          <Link className={styles.profileLink} to='/me'>Ver Perfil</Link>
				</div>
			</div>
		</div>
	)
}