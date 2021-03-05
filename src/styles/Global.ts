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
  
  body {    
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, button {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', sans-serif
  }

  body, #root {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
