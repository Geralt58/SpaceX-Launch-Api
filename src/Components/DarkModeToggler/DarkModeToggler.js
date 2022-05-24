import { useEffect, useState } from 'react'
import Toggler from './DarkModeToggler.styles'


export default () => {
   const handleThemeChange = (e) => {
      // e.target.checked ? setDarkTheme() : setLightTheme()
   }

   return (
      <Toggler>
         <input type="checkbox" id="dn" onChange={handleThemeChange} />
         <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
               <span className="crater crater--1"></span>
               <span className="crater crater--2"></span>
               <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
         </label>
      </Toggler>
   )
}
