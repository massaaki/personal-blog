import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  min-height: 100vh;

  > a {
    font-size: 15px;
    background: ${props => props.theme.colors.light.footerBackground};
    color: ${props => props.theme.colors.light.footerText};
    border-radius: 50px;
    padding: 5px 15px;
    margin: 10px 0;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
`;
export const Author = styled.p`
  font-size: 15px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 600px;
    width: 100%;
  }
  h2 {
    margin: 10px 0;
    font-size: 25px;
    font-weight: bold;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    max-width: 780px;
    img {
      margin: 10px;
    }
  }
  code {
    background: ${props => props.theme.colors.light.codeBackground};
    color: ${props => props.theme.colors.light.codeText};
    padding: 15px;
    margin: 10px;
  }
`;
