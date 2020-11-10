import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 30px;
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

export const Home = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Description = styled.p`
  text-transform: uppercase;
`;
