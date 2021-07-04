const getDefaultUser = () => {
  return {
    isDefault: true,
    id: "No registrado",
    data: {
      personalInfo: {
        profilePhoto: "./images/adaptive-icon.png"
      },
      finance: {
        balance: 0,
      }
    }
  }
}

const getUserData = () => {
  let data = localStorage.getItem("user")
  if (data === null)
    data = getDefaultUser()
  // little hack for consistency
  if (data.data['personal-info'] !== undefined)
    data.personalInfo = data.data['personal-info']
  return data;
}

export { getUserData }