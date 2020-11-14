import Link from 'next/link';
import IPost from '../../../models/interfaces/IPost';

import StackIconSelector from 'shared/components/StackIconSelector';
import BackgroundAbstract from 'shared/icons/BackgroundAbstract';

import { List, ThumbFake, PublishDate } from './styles';
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
                    {post.frontmatter.publishDate && (
                      <PublishDate>
                        {post.frontmatter.publishDate} min.
                      </PublishDate>
                    )}
                    <h2>{post.frontmatter.title}</h2>
                    {post.frontmatter.level && (
                      <p>
                        Level: <span>{post.frontmatter.level}</span>
                      </p>
                    )}
                    {post.frontmatter.minToRead && (
                      <p>
                        Tempo de leitura:
                        <span> {post.frontmatter.minToRead} min.</span>
                      </p>
                    )}
                    {post.frontmatter.stacks && (
                      <ul>
                        {post.frontmatter.stacks.map((stack, index) => {
                          return (
                            <li key={index}>
                              <StackIconSelector name={stack} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
