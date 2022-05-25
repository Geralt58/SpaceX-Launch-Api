import styled from 'styled-components'

const ToTopDiv = styled.div`
   .hide {
      bottom: -100px;
   }
   button {
      position: fixed;
      bottom: 50px;
      right: 50px;
      display: inline-block;
      border: 0;
      background: ${(props) => props.theme.LayerOneColor};
      border-radius: 50%;
      padding: 1rem;
      box-shadow: 0 1px 5px gray;
      transition: all 0.2s ease-out, bottom 0.2s ease-in-out;
      cursor: pointer;

      :hover {
         background-color: ${(props) => props.theme.Hover};
         transform: scale(1.02);
      }

      :active {
         transform: scale(0.98);
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
