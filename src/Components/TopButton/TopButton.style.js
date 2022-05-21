import styled from 'styled-components'

const ToTopDiv = styled.div`
   .hide {
      bottom: -100px;
   }
   a {
      position: fixed;
      bottom: 50px;
      right: 50px;
      display: inline-block;
      background: white;
      border-radius: 50%;
      padding: 1rem;
      box-shadow: 1px 1px 5px gray;
      transition: background-color 0.5s ease-out, bottom 0.2s ease-in-out;

      :hover {
         background-color: #f2f2f2;
      }

      img {
         max-width: 40px;
      }
   }

   @media (max-width: 700px) {
      right: 30px;
      bottom: 30px;
   }
`
export default ToTopDiv
