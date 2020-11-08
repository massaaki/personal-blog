import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import DefaultLayout from 'shared/layout/DefaultLayout';
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
      <Link href="/">
        <a> Back</a>
      </Link>

      <article>
        <h1>{frontmatter.title}</h1>
        <p>by {frontmatter.author}</p>
        {frontmatter.thumbnail && <img src={frontmatter.thumbnail} alt="" />}

        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
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