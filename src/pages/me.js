import React, { useEffect, useState } from 'react'
import styles from './me.module.css'
import { Template } from './template'
import { Card } from '../components/template/card'
import { Button } from '../components/template/button'
import { InputBase } from '../components/template/inputBase'
import { TextInput } from '../components/template/textInput'
import { RoundPicture } from '../components/template/roundPicture'
import classNames from 'classnames'
import { createInputHandler, createStateChangerBuilder } from '../helpers'
import { updateUserInfo } from '../helpers/data'
import { showRequestStatus } from '../components/swals/requestStatus'
import { showChangePassword } from '../components/swals/changePassword'

export const MePage = ({ user, setUser }) => {
  const [userCopy, setUserCopy] = useState(user)

  const buildStateChanger = createStateChangerBuilder(userCopy, setUserCopy)

  const changeGender =  buildStateChanger('isMale')
  const changeName = createInputHandler(buildStateChanger('name'))
  const changeEmail = createInputHandler(buildStateChanger('email'))

  const messages = {
    loading: "Guardando Cambios",
    success: "Cambios Guardados",
    error: "Hubo un Error al Guardar los Cambios"
  }

  const updateInfo = async () => {
    await showRequestStatus(async () => await updateUserInfo(userCopy), messages)
    setUser(userCopy)
  }

  useEffect(() => { setUserCopy(user)}, [user, setUserCopy])

  return (
    <Template>
      <div className={styles.container}>
        <Card className={styles.root}>
          <div className={styles.pictureContainer}>
            <RoundPicture src={user.profilePhoto} className={styles.picture}></RoundPicture>
          </div>
          <TextInput title="Nombre" value={userCopy.name} onChange={changeName}></TextInput>
          <InputBase title="Fecha de nacimiento">
            {user.dateOfBirth.day}/{user.dateOfBirth.month}/{user.dateOfBirth.year}
          </InputBase>
          <InputBase title="Sexo">
            <div className={styles.gender}>
              <Button 
                onClick={() => changeGender(false)} 
                className={classNames(styles.button, userCopy.isMale === false ? styles.active : "")}>
                Femenino
              </Button>
              <Button 
                onClick={() => changeGender(true)} 
                className={classNames(styles.button, userCopy.isMale === true ? styles.active : "")}>
                Masculino
              </Button>
              <Button 
                onClick={() => changeGender(null)} 
                className={classNames(styles.button, userCopy.isMale === null ? styles.active : "")}>
                Indefinido
              </Button>
            </div>
          </InputBase>
          <TextInput title="Correo electrónico" value={userCopy.email} onChange={changeEmail}></TextInput>
          <div className={styles.bottom}>
            <div className={styles.changepw} onClick={() => showChangePassword(user)}>
              Cambiar contraseña
            </div>
            <Button 
              className={classNames(styles.saveChanges, styles.active)}
              onClick={updateInfo}>Guardar Cambios</Button>
          </div>
        </Card>
      </div>
    </Template>
  )
}