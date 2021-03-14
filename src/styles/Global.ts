import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    text-decoration: none;
    list-style: none;

    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /*isso equivale a 15px*/
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /*14px*/
    }
  }
  
  body {    
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', sans-serif
  }


  body, #root {
    max-width: 64.0rem; //960px
    margin: 0 auto;
    
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    color: white;
  }
`;
