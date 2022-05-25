import styled from 'styled-components'
import spaceXLaunch from '../../assets/spacex-launch.jpg'

const NavBar = styled.div`
   display: grid;
   background: ${(props) => props.theme.LayerOneColor};
   height: 7rem;
   box-shadow: 0 1px 5px gray;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: 7rem;
   align-items: center;

   /* align-items: center; */
   .navbar-middle {
      grid-column-start: 2;
      img {
         max-width: 500px;
         @media (max-width: 700px) {
            max-width: 300px;
         }
      }
   }

   .navbar-right {
      justify-self: end;
      margin-right: 50px;
      transform: scale(0.8);
      @media (max-width: 700px) {
         margin-right: 15px;
         transform: scale(0.5);
      }
   }

   @media (max-width: 700px) {
      height: 6rem;
      grid-template-rows: 6rem;
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
   box-shadow: 1px 1px 5px ${(props) => props.theme.Shadow};
   background: ${(props) => props.theme.LayerOneColor};
   color: ${(props) => props.theme.TextColor};

   p {
      font-weight: bold;
      text-align: center;
      padding: 3rem 0;
      border-bottom: 1px solid ${(props) => props.theme.Line};
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
            color: ${(props) => props.theme.TextColor};
            transition: background-color 0.3s ease-in-out;

            :hover {
               background-color: ${(props) => props.theme.Hover};
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
