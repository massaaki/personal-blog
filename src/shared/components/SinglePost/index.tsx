import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import IFrontMatter from 'models/interfaces/IFrontmatter';

import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import { SiFirebase, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';
import {
  Post,
  PostContent,
  Article,
  Title,
  Author,
  ArticleHeader,
  PublicationInformation,
  PostInfo,
  Tags,
  DevLevel
} from './styles';

interface IRequest {
  frontmatter: IFrontMatter;
  markdownBody: string;
}

const SinglePost = ({ frontmatter, markdownBody }: IRequest) => {
  return (
    <Post>
      <Article>
        <ArticleHeader>
          <PublicationInformation>
            <ul>
              <li>
                <FaCalendarAlt /> 22/08/2020
              </li>
              <li>
                <FaRegClock /> 15min to read
              </li>
            </ul>
          </PublicationInformation>
          <Title>{frontmatter.title}</Title>
          <Author>{frontmatter.author}</Author>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </ArticleHeader>
        <PostContent>
          <ReactMarkdown source={markdownBody} />
        </PostContent>
      </Article>

      <PostInfo>
        <DevLevel>
          Complexidade:&nbsp;
          <span>Fácil</span>
        </DevLevel>

        <Tags>
          <h3>Stacks</h3>
          <ul>
            <li>
              <SiReact />
            </li>
            <li>
              <SiHtml5 />
            </li>
            <li>
              <SiCss3 />
            </li>
            <li>
              <SiFirebase />
            </li>
          </ul>
        </Tags>
      </PostInfo>
    </Post>
  );
};

export default SinglePost;
