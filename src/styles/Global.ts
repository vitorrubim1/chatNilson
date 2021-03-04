import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-dark: #0d0d0d;
    --color-white: #f2f2f2;
    --color-purple: #751aff;
  }

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
  }

  body, input, button {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', sans-serif
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
