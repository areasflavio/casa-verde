import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F7F7F7;
    color: #202020;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-image: url('/images/body-shape.svg'),
                      url('/images/bg-lines.svg'),
                      url('/images/bg.jpg');
    background-repeat: no-repeat, 
                      repeat-x;
    background-position: right top;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Elsie Swash Caps', sans-serif;
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  } 

  button {
    cursor: pointer;
  }

  input, button {
    border: none;
  }
  
  main {
    max-width: 1240px;
    padding: 10px 20px;
    margin: 0 auto;

    position: relative;
  }

  @media(max-width: 980px) {
    body {
      background-image: none;
    }
  }
`;
