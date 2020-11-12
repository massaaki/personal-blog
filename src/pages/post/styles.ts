import styled from 'styled-components';

export const ArticleHeader = styled.div`
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > a {
    text-align: center;
    max-width: 80px;
    font-size: 15px;
    background: ${props => props.theme.colors.light.footerBackground};
    color: ${props => props.theme.colors.light.footerText};
    border-radius: 50px;
    padding: 5px 15px;
    margin: 10px 0;
  }
`;

export const Post = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
  @media (max-width: 800px) {
    flex-direction: column;
    order: 1;
  }
`;

export const Article = styled.article`
  margin: 30px 0;
  min-height: 100vh;
  width: 100%;
  @media (max-width: 800px) {
    order: 2;
  }
`;

export const PublicationInformation = styled.div`
  ul {
    display: inline-flex;
    margin-bottom: 5px;
    li {
      &:not(:last-child) {
        margin-right: 8px;
      }
      font-size: 14px;
      color: #888;
    }
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const Author = styled.p`
  font-size: 15px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 100%;
  }
  h2 {
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 10px;
      width: 100%;
    }
  }
  code {
    background: ${props => props.theme.colors.light.codeBackground};
    color: ${props => props.theme.colors.light.codeText};
    padding: 15px;
    margin: 10px;
  }
`;

export const PostInfo = styled.div`
  width: 35%;
  margin: 10px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const DevLevel = styled.div`
  color: #aaa;
  border: 1px solid #aaa;
  padding: 5px;
  border-radius: 50px;

  span {
    color: #609ef3;
    font-weight: bold;
  }
`;

export const Tags = styled.div`
  margin: 30px 0;

  h3 {
    margin-bottom: 5px;
  }
  ul {
    display: inline-flex;

    li {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 200;
      color: #609ef3;

      &:not(:last-child) {
        margin-right: 10px;
      }
      svg {
        font-size: 30px;
      }
    }
  }
`;
