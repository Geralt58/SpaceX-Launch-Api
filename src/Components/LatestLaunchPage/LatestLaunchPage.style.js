import styled from 'styled-components'

const CardGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin: auto;
   width: 1000px;
   min-height: 20rem;

   @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
      width: 700px;
   }
   @media (max-width: 700px) {
      grid-template-columns: 1fr;
      width: 350px;
   }
`

export { CardGrid }
