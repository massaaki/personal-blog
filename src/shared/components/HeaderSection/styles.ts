import styled from 'styled-components';

export const Header = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  p {
    font-size: 15px;
    font-weight: lighter;
    margin-bottom: 7px;
    margin-left: 4px;
  }
  h1 {
    font-size: 41px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
`;

export const Description = styled.p`
  text-transform: uppercase;
`;
