import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Article = ({ blog }) => {
  return (
    <ul>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link as={NextLink} href={`/blog/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Article;
