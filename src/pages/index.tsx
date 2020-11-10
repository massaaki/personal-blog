import matter from 'gray-matter';

import DefaultLayout from 'shared/layout/DefaultLayout';
import PostsList from 'shared/components/PostsList';
import IPost from 'models/interfaces/IPost';

import { Content, Home, Description } from './styles';

interface IValue {
  default: string;
}

interface IRequest {
  posts: IPost[];
}

const HomePage = ({ posts }: IRequest) => {
  return (
    <DefaultLayout pageTitle="Boilerplate - ReactJs + Next">
      <Content>
        <Home>
          <p>Hello, I'm</p>
          <h1>Maurício Massaaki</h1>
          <Description>Entrepeneur & passionate developer</Description>
        </Home>
        <main>
          <PostsList posts={posts} />
        </main>
      </Content>
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

export default HomePage;
