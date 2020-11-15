import matter from 'gray-matter';

import DefaultLayout from 'shared/layout/DefaultLayout';
import PostsList from 'shared/components/PostsList';
import IPost from 'models/interfaces/IPost';

import HeaderSection from 'shared/components/HeaderSection';
import IFrontMatter from 'models/interfaces/IFrontmatter';

interface IHomeData {
  pageTitle: string;
  topText: string;
  mainText: string;
  bottomText: string;
}

interface IRequest {
  posts: IPost[];
  homeData: IHomeData;
}

const HomePage = ({ posts, homeData }: IRequest) => {
  return (
    <DefaultLayout pageTitle={homeData?.pageTitle}>
      <div className="main">
        <HeaderSection
          topText={homeData?.topText}
          mainText={homeData?.mainText}
          bottomText={homeData?.bottomText}
        />
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

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];

      const { data: info, content: postBody } = matter(value.default);

      const postInfo = {
        title: info.title,
        author: info.author,
        minToRead: info.minToRead,
        level: info.level,
        stacks: info.stacks,
        publishDate: new Date(info.publishDate).toUTCString(),
        thumbnail: info.thumbnail
      };

      return {
        frontmatter: postInfo,
        markdownBody: postBody,
        slug
      };
    });
    return data;
  })(require.context('../contents/posts', true, /\.md$/));

  const homeMd = await import('contents/pages/home.md');
  const { data: homeData } = matter(homeMd.default);

  return {
    props: {
      homeData,
      posts
    }
  };
}

export default HomePage;
