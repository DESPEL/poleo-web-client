const themeData = {
  "black": {
    "--background-color": "#000000",
    "--container-background-dark": "#121212",
    "--container-background": "#171717",
    "--container-background-light": "#1C1C1C",
    "--input-background": "#323232",
    "--separator-color": "#505050",
    "--font-color": "#FFFFFF",
    "--secondary-font-color": "#969696",
    "--accent-color": "#12E57A",
    "color": "var(--font-color)",
    "--card-color-2": "var(--container-background-light)",
    "--sidebar-bg": "var(--container-background)",
    "--colorInvert": "1",
  },
  "white": {
    "--background-color": "#F0F0F0",
    "--container-background-dark": "#FFFFFF",
    "--container-background": "#FFFFFF",
    "--container-background-light": "#FFFFFF",
    "--input-background": "#F0F0F0",
    "--separator-color": "#F0F0F0",
    "--font-color": "#000000",
    "--secondary-font-color": "#646464",
    "--accent-color": "#12E57A",
    "color": "var(--font-color)",
    "--card-color-2": "var(--container-background-light)",
    "--sidebar-bg": "var(--container-background)",
    "--colorInvert": "0",
  },
  // more themes can be added in here
}

export const changeTheme = (to) => {
  if (themeData[to] === undefined) {
    console.log("uh oh theme error")
    return
  }
  const props = themeData[to]
  for (const key in props) {
    document.documentElement.style.setProperty(key, props[key])
  }
}