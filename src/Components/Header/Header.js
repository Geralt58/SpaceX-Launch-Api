import { NavLink, useLocation } from 'react-router-dom'
import { NavBar, Content, LaunchLink } from './Header.styles'
import spaceX from '../../assets/Spacex-logo.png'

const Header = () => (
   <div id="top">
      <NavBar>
         <NavLink to="/"><img src={spaceX} alt="SpaceX" /></NavLink>
      </NavBar>
      <Content>
         <div className="content-container">
            {useLocation().pathname.includes('/launches') ? <a href="#launch-heading">View Launches</a> : <a href="/launches/latest/#launch-heading">View Launches</a>}
         </div>
      </Content>
      <LaunchLink>
         <p id="launch-heading">SpaceX Launch Database</p>
         <ul>
            <li>
               <NavLink to="/launches/latest">
                  Latest
               </NavLink>
            </li>
            <li>
               <NavLink to="/launches/upcoming">
                  Upcoming
               </NavLink>
            </li>
            <li>
               <NavLink to="/launches/past">
                  Past
               </NavLink>
            </li>
         </ul>
      </LaunchLink>
   </div>
)

export default Header
