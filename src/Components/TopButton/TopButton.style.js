import styled from 'styled-components'

const ToTopDiv = styled.div`
   position: fixed;
   bottom: 50px;
   right: 50px;

   .hide {
      display: none;
   }

   a {
      display: inline-block;
      background: white;
      border-radius: 50%;
      padding: 1rem;
      box-shadow: 1px 1px 5px gray;

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
