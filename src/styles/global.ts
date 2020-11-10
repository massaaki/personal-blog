import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, main,
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
    color: ${props => props.theme.colors.light.text};
    transition: color 0.2s;
    &:hover {
      color: ${props => props.theme.colors.light.textHover};
    }
  }

  body {
    background: ${props => props.theme.colors.light.background};
    color: ${props => props.theme.colors.light.text};
    text-rendering: optimizeLegibility;
  }
`;
