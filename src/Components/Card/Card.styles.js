import styled from 'styled-components'

const CardComponent = styled.div`
   background: ${(props) => props.theme.LayerOneColor};
   margin: 2rem 1rem;
   padding: 1rem;
   max-height: 35rem;
   border-radius: 5px;
   box-shadow: 0px 1px 3px ${(props) => props.theme.Shadow};
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
      background-color: ${(props) => props.theme.Hover};
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
   color: ${(props) => props.theme.TextColor};
   ul {
      padding-top: 4rem;
      overflow: scroll;
      &::-webkit-scrollbar {
         width: 0.4rem;
         background: transparent;
         &-corner {
            background: transparent;
         }
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
