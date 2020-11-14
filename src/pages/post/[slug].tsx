import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DefaultLayout from 'shared/layout/DefaultLayout';

import IFrontMatter from 'models/interfaces/IFrontmatter';

import SinglePost from 'shared/components/SinglePost';

interface IRequest {
  frontmatter: IFrontMatter;
  markdownBody: string;
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

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'src/posts'))
    .map(postName => {
      const trimmedName = postName.substring(0, postName.length - 3);
      return {
        params: { slug: trimmedName }
      };
    });

  return {
    paths,
    fallback: false
  };
}

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

export default post;
