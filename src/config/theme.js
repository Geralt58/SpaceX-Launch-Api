import React from 'react'

const LightTheme = {
   headerBackgroundColor: '#333'
}

const DarkTheme = {
   headerBackgroundColor: '#fff'
}

const getTheme = () => {
   //localstore true false dark light
   return LightTheme
}

const setDarkTheme = () => {
   
}

const setLightTheme = () => {
   
}

const ThemeContext = React.createContext()

export { getTheme, ThemeContext }
