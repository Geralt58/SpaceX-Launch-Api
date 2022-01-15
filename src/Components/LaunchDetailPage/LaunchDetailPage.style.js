import styled from 'styled-components'

const LaunchDetailLayot = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   > div {
      background: white;
      width: 1000px;
      margin: 2rem;
      padding: 3rem;
      box-shadow: 1px 1px 3px lightgray;
      overflow-wrap: break-word;

      h1 {
         border-bottom: 1px solid lightgray;
         margin-bottom: 2rem;
      }

      h3 {
         text-decoration: underline;
         padding: 2rem 0;
      }

      ul {
         padding: 0 3rem;
         line-height: 2;
      }

      iframe {
          margin: 1rem;
      }

      span {
         font-weight: bold;
      }

      @media (max-width: 1100px) {
         width: 700px;
         iframe {
            width: 500px;
            height: 304.6px;
         }
      }
      @media (max-width: 700px) {
         width: 340px;
         iframe {
            width: 200px;
            height: 121.8px;
         }
      }
   }
`

export { LaunchDetailLayot }
