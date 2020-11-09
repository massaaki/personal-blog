import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p,
  a, nav{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }


  /* GLOBAL */
  a {
    color: ${props => props.theme.colors.dark.text};
    transition: color 0.2s;
    &:hover {
      color: #fff;
    }
  }

  body {
  @font-face {
    font-family: 'Montserrat';
    src:
      url('../assets/fonts/Montserrat/Montserrat-Medium.ttf')
      format('truetype');
  }
    background: ${props => props.theme.colors.dark.background};
    color: ${props => props.theme.colors.dark.text};

    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.colors.dark.text};
    text-rendering: optimizeLegibility;
  }




`;
