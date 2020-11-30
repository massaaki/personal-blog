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
    max-width: 840px;
  }
  h2 {
    margin: 45px 0px 10px 0;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 15px;
    img {
      margin: 10px;
    }
  }
  blockquote {
    margin: 10px 0;
    padding: 5px 0;
    p {
      border-left: 3px solid ${props => props.theme.colors.light.stacksColor};
      padding: 10px 0px 10px 5px;
    }
  }
  code {
    display: inline-block;
    width: 100%;
    background: ${props => props.theme.colors.light.codeBackground};
    color: ${props => props.theme.colors.light.codeText};
    padding: 15px;
    margin: 10px 10px 30px 10px;
  }
  ol {
    margin: 15px 0;
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
