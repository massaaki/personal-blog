import styled from 'styled-components';

export const List = styled.ul`
  display: inline-flexbox;

  li {
    margin: 5px;
    border: 1px solid #f1f1f1;
    max-width: 300px;
    width: 100%;
    a {
      margin: 5px;
      display: flex;
      flex-direction: column;
      font-size: 15px;
      text-transform: uppercase;

      text-align: center;
      img {
        max-width: 300px;
        margin-bottom: 5px;
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
