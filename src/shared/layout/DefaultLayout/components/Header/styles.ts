import styled from 'styled-components';

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background: ${props => props.theme.colors.dark.navBackground};
  width: 100%;
  height: 60px;
  padding: 0 30px;
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
