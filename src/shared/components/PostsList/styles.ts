import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
  > li {
    border: 1px solid #f1f1f1;
    max-width: 300px;
    width: 100%;
    a {
      margin: 5px;
      display: flex;
      flex-direction: column;
      font-size: 15px;
      text-transform: uppercase;
      position: relative;

      text-align: center;
      img {
        max-width: 300px;
        margin-bottom: 5px;
      }
      h2 {
        margin: 5px 0;
      }
      p {
        font-size: 10px;
        color: #000;
        span {
          font-weight: bold;
          color: #555;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        li {
          margin: 5px 2px;
          svg {
            width: 20px;
            height: 20px;
            color: ${props => props.theme.colors.light.stacksColor};
          }
        }
      }
    }
  }
`;

export const ThumbFake = styled.div`
  content: '';
  background: #fff;
  max-width: 300px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f1f1f1;
  margin-bottom: 5px;
`;

export const PublishDate = styled.div`
  font-size: 10px;
`;
