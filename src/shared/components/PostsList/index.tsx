import Link from 'next/link';
import IPost from '../../../models/interfaces/IPost';

interface IRequest {
  posts?: IPost[];
}
const PostList = ({ posts }: IRequest) => {
  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map(post => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostList;
