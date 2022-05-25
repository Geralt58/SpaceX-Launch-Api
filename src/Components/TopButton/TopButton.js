import { useState, useContext } from 'react'
import topButtonBlack from '../../assets/up-arrow-black.png'
import topButtonWhite from '../../assets/up-arrow-white.png'
import ToTopDiv from './TopButton.style'
import { ThemeContext } from '../../config/theme'
import { useScroll } from 'hooks'

const TopButton = () => {
   const [hideButton, SetHideButton] = useState(true)
   const { theme } = useContext(ThemeContext)

   useScroll(
      (scrollY) => scrollY > window.innerHeight,
      () => SetHideButton(false)
   )
   useScroll(
      (scrollY) => scrollY === 0,
      () => SetHideButton(true)
   )

   const handleToTopScroll = () => {
      window.scrollTo({top: 0})
   }

   return (
      <ToTopDiv theme={theme}>
         <button onClick={handleToTopScroll} className={`${hideButton ? 'hide' : ''}`}>
            {theme.TextColor === 'black' ? (
               <img src={topButtonBlack} alt="Go to Top Black" />
            ) : (
               <img src={topButtonWhite} alt="Go to Top White" />
            )}
         </button>
      </ToTopDiv>
   )
}

export default TopButton
