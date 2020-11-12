import Link from 'next/link';
import IPost from '../../../models/interfaces/IPost';
import BackgroundAbstract from 'shared/icons/BackgroundAbstract';
import { List, ThumbFake } from './styles';
interface IRequest {
  posts?: IPost[];
}

const PostList = ({ posts }: IRequest) => {
  return (
    <div>
      {!posts && <div>No posts!</div>}
      <List>
        {posts &&
          posts.map(post => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>
                    {post.frontmatter.thumbnail ? (
                      <img src={post.frontmatter.thumbnail} />
                    ) : (
                      <ThumbFake>
                        <BackgroundAbstract />
                      </ThumbFake>
                    )}
                    {post.frontmatter.title}
                  </a>
                </Link>
              </li>
            );
          })}
      </List>
    </div>
  );
};

export default PostList;
