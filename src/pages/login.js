import React, { useState } from 'react'

import { Template } from './template'

export const Login = () => {
  const [username, setUsername] = useState("UserId")
  const [password, setPassword] = useState("Contraseña")

  const saveUser = () => {
    localStorage.setItem("userId", username)
    localStorage.setItem("password", password)
    window.location.href = "/"
  }

  return (
    <Template>
      Temporal Login 
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={saveUser}>Save</button>
    </Template>
  )
}