import styled from 'styled-components';

export const Menu = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background: ${props => props.theme.colors.light.navBackground};
  width: 100%;
  height: 60px;
  padding: 0 30px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  height: 60px;

  > a {
    width: 100px;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ul {
      li {
        display: inline;
        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
  }
`;
