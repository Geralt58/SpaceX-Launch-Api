import styled from 'styled-components'

const Spinner = styled.div`
   margin: 5rem auto;
   border: 16px solid #f3f3f3;
   border-radius: 50%;
   border-top: 16px solid gray;
   width: 120px;
   height: 120px;
   animation: spin 2s linear infinite;

   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`

export default Spinner
