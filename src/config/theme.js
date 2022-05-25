import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.bodyBackground};
  }
`

const getTheme = (darkTheme) => {
   return {
      bodyBackground: darkTheme ? '#0c0c0c' : '#f3f3f3',
      LayerOneColor: darkTheme ? '#333' : 'white',
      TextColor: darkTheme ? 'white' : 'black',
      Line: darkTheme ? 'black' : 'lightgray',
      Hover: darkTheme ? 'gray' : 'lightgray',
      Shadow: darkTheme ? 'transparent' : 'gray'
   }
}

const ThemeContext = React.createContext()

const ThemeWrapper = ({ children }) => {
   const [isDark, setIsDark] = useState(false)

   const setDarkTheme = () => setIsDark(true)
   const setLightTheme = () => setIsDark(false)
   const theme = getTheme(isDark)

   return (
      <>
         <GlobalStyle theme={theme} />
         <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>{children}</ThemeContext.Provider>
      </>
   )
}

export { ThemeWrapper, ThemeContext }
