import React from 'react'
import styles from './userCard.module.css'

import { Link } from 'react-router-dom'
import { RoundPicture } from '../template/roundPicture'

export const UserCard = ({user}) => {
  const pfp = user.profilePhoto
  const username = user.name

	return (
		<div className={styles.userCard}>
			<div className={styles.picContainer}>
        <RoundPicture src={pfp}></RoundPicture>
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