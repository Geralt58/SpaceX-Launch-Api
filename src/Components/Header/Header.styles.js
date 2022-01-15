import styled from 'styled-components'
import spaceXLaunch from '../../assets/spacex-launch.jpg'

const NavBar = styled.div`
   display: flex;
   background: white;
   height: 7rem;
   box-shadow: 0 1px 5px gray;
   justify-content: center;
   align-items: center;
   img {
      max-width: 500px;

      @media (max-width: 700px) {
         max-width: 300px;
      }
   }
`

const Content = styled.div`
   background: #333;
   position: relative;
   height: 60vh;
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 2px solid #ffbc00;

   :before {
      content: '';
      background: url(${spaceXLaunch}) no-repeat center 30% / cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
   }

   .content-container {
      z-index: 1;
      a {
         text-decoration: none;
         font-weight: bold;
         color: #f3f3f3;
         border: 5px solid #f3f3f3;
         padding: 1rem;
         transition: all 0.5s ease-out;

         :hover {
            background: rgba(159, 159, 159, 0.411);
            color: 0;
         }
      }
   }
`

const LaunchLink = styled.div`
   box-shadow: 0 1px 5px gray;
   background: white;

   p {
      font-weight: bold;
      text-align: center;
      padding: 3rem 0;
      border-bottom: 1px solid lightgray;
   }

   ul {
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
         list-style: none;
         .active {
            text-decoration: underline;
         }

         a {
            text-decoration: none;
            padding: 1.9rem 6rem;
            color: black;
            transition: all 0.5s ease-out;

            :hover {
               background: lightgray;
            }
         }
      }

      @media (max-width: 800px) {
         height: 15rem;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;

         li {
            a {
               :hover {
                  background: white;
               }
            }
         }
      }
   }
`

export { NavBar, Content, LaunchLink }
