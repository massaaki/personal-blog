import styled from 'styled-components';

export const Footer = styled.footer`
  background: linear-gradient(
    134deg,
    rgb(106, 152, 240) 0%,
    rgb(73, 97, 220) 99%
  );

  margin-top: 30px;
  width: 100%;
  min-height: 60px;
  color: ${props => props.theme.colors.light.footerText};

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
`;
