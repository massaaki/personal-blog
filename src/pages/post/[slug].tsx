import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import { SiFirebase, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';
import DefaultLayout from 'shared/layout/DefaultLayout';
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
import IFrontMatter from 'models/interfaces/IFrontmatter';

interface IRequest {
  frontmatter: IFrontMatter;
  markdownBody: string;
}

interface IBlogSlugContext {
  keys: () => string[];
}

const post = ({ frontmatter, markdownBody }: IRequest) => {
  if (!frontmatter.title) return <></>;

  return (
    <DefaultLayout pageTitle={frontmatter.title}>
      <div className="main">
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
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    }
  };
}

export async function getStaticPaths() {
  const blogSlugs = (context: IBlogSlugContext) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  };

  const contexts = blogSlugs(require.context('../../posts', true, /\.md$/));
  const paths = contexts.map(slug => `/post/${slug}`);

  return {
    paths,
    fallback: false
  };
}

export default post;
