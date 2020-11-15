import styled from 'styled-components';

export const Header = styled.section`
  position: relative;
  height: 50vh;
  width: 100%;
  display: flex;

  .codeBlock {
    position: absolute;
    display: flex;
    align-items: center;
    margin: auto;
    right: 0px;
    left: 60%;
    top: 0;
    bottom: 0;
    > svg {
      background: #f8f8f8;
      padding: 15px 50px;
      max-width: 460px;
      width: 100%;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
    }
    @media (max-width: 1000px) {
      display: none;
    }
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
  ul li a {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Description = styled.p`
  text-transform: uppercase;
`;
