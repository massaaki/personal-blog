import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  @font-face {
    font-family: 'Montserrat';
    src:
      url('../assets/fonts/Montserrat/Montserrat-Medium.ttf')
      format('truetype');
  }
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
  }
`;
