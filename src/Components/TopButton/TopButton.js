import { useState, useEffect } from 'react'
import topButton from '../../assets/up-arrow.png'
import ToTopDiv from './TopButton.style'

const TopButton = () => {
   const [hideButton, SetHideButton] = useState(true)

   useEffect(() => {
      const updateHideButton = () => {
         const scrollCheck = window.scrollY < 700
         if (scrollCheck !== hideButton) {
            SetHideButton(scrollCheck)
         } else if (window.scrollY === 0) {
            SetHideButton(true)
         }
      }

      document.addEventListener('scroll', updateHideButton)

      return () => {
         document.removeEventListener('scroll', updateHideButton)
      }
   }, [])

   return (
      <ToTopDiv>
         <a href="#top" className={`${hideButton ? 'hide' : ''}`}>
            <img src={topButton} alt="Go to Top" />
         </a>
      </ToTopDiv>
   )
}

export default TopButton
