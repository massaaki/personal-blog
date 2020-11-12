import matter from 'gray-matter';
import DefaultLayout from 'shared/layout/DefaultLayout';

import IFrontMatter from 'models/interfaces/IFrontmatter';

import SinglePost from 'shared/components/SinglePost';

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
        <SinglePost frontmatter={frontmatter} markdownBody={markdownBody} />
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
