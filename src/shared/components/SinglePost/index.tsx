import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import IFrontMatter from 'models/interfaces/IFrontmatter';

import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import StackIconSelector from 'shared/components/StackIconSelector';
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
              {frontmatter.publishDate && (
                <li>
                  <FaCalendarAlt />
                  {frontmatter.publishDate}
                </li>
              )}
              {frontmatter.minToRead && (
                <li>
                  <FaRegClock /> {frontmatter.minToRead}min to read
                </li>
              )}
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

      {(frontmatter.level || frontmatter.stacks) && (
        <PostInfo>
          {frontmatter.level && (
            <DevLevel>
              Level:&nbsp;
              <span>{frontmatter.level}</span>
            </DevLevel>
          )}
          {frontmatter.stacks && (
            <Tags>
              <h3>Stacks</h3>
              <ul>
                {frontmatter.stacks.map((stack, index) => {
                  return (
                    <li key={index}>
                      <StackIconSelector name={stack} />
                    </li>
                  );
                })}
              </ul>
            </Tags>
          )}
        </PostInfo>
      )}
    </Post>
  );
};

export default SinglePost;
