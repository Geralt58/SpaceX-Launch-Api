import React, { useState } from 'react'

const LightTheme = {
   headerBackgroundColor: 'white'
}

const DarkTheme = {
   headerBackgroundColor: '#333'
}

const ThemeContext = React.createContext()

const ThemeWrapper = ({ children }) => {
   const [theme, setTheme] = useState(LightTheme)

   const setDarkTheme = () => setTheme(DarkTheme)
   const setLightTheme = () => setTheme(LightTheme)

   return <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeWrapper, ThemeContext }
