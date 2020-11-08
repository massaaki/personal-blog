import matter from 'gray-matter';

import DefaultLayout from 'shared/layout/DefaultLayout';
import PostsList from 'shared/components/PostsList';
import IPost from 'models/interfaces/IPost';
interface IValue {
  default: string;
}

interface IRequest {
  posts: IPost[];
}

const Home = ({ posts }: IRequest) => {
  return (
    <DefaultLayout pageTitle="Boilerplate - ReactJs + Next">
      <div className="content">
        <h1>Boilerplate</h1>
        <h2>React.js + Next.js</h2>

        <main>
          <PostsList posts={posts} />
        </main>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const posts = (context => {
    const keys: string[] = context.keys();
    const values = keys.map<{ default: string }>(context);
    console.log('values..:', values);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];

      console.log('type..:', typeof value.default);
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug
      };
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts
    }
  };
}

export default Home;
