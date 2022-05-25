import styled from 'styled-components'

const FooterMain = styled.div`
   height: 7rem;
   background: ${(props) => props.theme.LayerOneColor};
   color: ${(props) => props.theme.TextColor};
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem;
   box-shadow: 0px 0px 3px ${(props) => props.theme.Shadow};
   a {
      color: ${(props) => props.theme.TextColor};
   }
`

export { FooterMain }
