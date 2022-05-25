import { useContext } from 'react'
import { FooterMain } from './Footer.style'
import { ThemeContext } from 'config/theme'

const Footer = () => {
   const { theme } = useContext(ThemeContext)
   return (
      <FooterMain theme={theme}>
         <p>
            Created by Soumyadeep Basu. Api created by&nbsp;
            <a href="https://github.com/r-spacex/SpaceX-API/tree/master/docs">SpaceX</a>
         </p>
      </FooterMain>
   )
}
export default Footer
