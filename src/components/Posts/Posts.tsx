import { HStack, Box, Heading, Tag, Link, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';
import { blog } from '../../types/responseDataType';
import DateFormat from '../../util/DateFormat';

type Props = {
  blogs: blog[];
};

const Article: VFC<Props> = ({ blogs }) => {
  return (
    <Box>
      {blogs.map((blog) => (
        <>
          <Box key={blog.id}>
            <HStack>
              <Box as="time" dateTime={blog.createdAt}>
                {DateFormat(blog.createdAt)}
              </Box>
              <Tag>{blog.category.name}</Tag>
            </HStack>
            <Heading size="lg" mt={2}>
              <Link as={NextLink} href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </Heading>
          </Box>
          <Divider mt={4} />
        </>
      ))}
    </Box>
  );
};

export default Article;
