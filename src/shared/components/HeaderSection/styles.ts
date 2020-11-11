import styled from 'styled-components';

export const Header = styled.section`
  position: relative;
  height: 50vh;
  width: 100%;
  display: flex;
  svg {
    z-index: 0;
    position: absolute;
    left: -16%;
    opacity: 0.6;
    top: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;
  p {
    font-size: 15px;
    font-weight: lighter;
    margin-bottom: 7px;
    margin-left: 4px;
  }
  h1 {
    font-size: 55px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 7px;
    color: #535353;
  }

  /* background: red; */
`;

export const Description = styled.p`
  text-transform: uppercase;
`;
