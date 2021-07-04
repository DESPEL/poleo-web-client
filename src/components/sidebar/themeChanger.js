import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './themeChanger.module.css'
import { changeTheme } from '../../helpers/changeTheme'

export const ThemeChanger = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme"))

	useEffect(() => {
		localStorage.setItem("theme", theme)
		changeTheme(theme)
	}, [theme])

	return (
		<div className={styles.root}>
			<div className={styles.button} onClick={() => setTheme(theme === "black" ? "white" : "black")}>
				<div className={styles.icon}>
					<div className={theme !== "black" ? styles.noshow : ''}>
						<span
							key="a"
							className={classNames('iconify', styles.icon)}
							data-icon={"akar-icons:sun-fill"} data-inline="false">
						</span>
					</div>
					<div className={theme === "black" ? styles.noshow : ''}>
						<span
							key="b"
							className={classNames('iconify', styles.icon)}
							data-icon={"il-moon"} data-inline="false">
							{theme === "black" ? styles.noshow : ''}
						</span>
					</div>
				</div>
				<p> Modo {theme === "black" ? "claro" : "oscuro"}</p>
			</div>
		</div>
	)
}

