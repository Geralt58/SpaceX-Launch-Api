import styled from 'styled-components'

const CardComponent = styled.div`
   background: white;
   margin: 2rem 1rem;
   padding: 1rem;
   max-height: 35rem;
   border-radius: 5px;
   box-shadow: 1px 1px 3px lightgray;
   transition: all 0.3s ease-out;
   
   a {
      text-decoration: none;
      color: black;

      img {
         display: block;
         margin: auto;
         max-width: 8rem;
      }
   }
   :hover {
      opacity: 0.9;
      transform: scale(1.02);
   }
`

const Text = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   margin-top: 2rem;
   max-height: 15rem;
   ul {
      padding-top: 4rem;
      overflow: scroll;
      &::-webkit-scrollbar {
         width: 0.4rem;
         background: transparent;
      }
      transition: all 1s ease-out;

      :hover {
         &::-webkit-scrollbar-thumb {
            background-color: lightgray;
         }
      }

      li {
         list-style: none;
         line-height: 2;
         span {
            font-weight: bold;
         }
      }
   }
`

export { CardComponent, Text }
