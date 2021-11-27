import {
  HStack,
  Stack,
  Box,
  Heading,
  Badge,
  Link,
  Divider,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';
import { blog } from '../../types/responseDataType';
import DateFormat from '../../util/DateFormat';
import styled from '@emotion/styled';

type Props = {
  blogs: blog[];
};

const BodyPreviwe = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Article: VFC<Props> = ({ blogs }) => {
  return (
    <Box>
      {blogs.map((blog) => (
        <Box key={blog.id} mb={8}>
          <Stack>
            <HStack>
              <Box as="time" dateTime={blog.createdAt}>
                {DateFormat(blog.createdAt)}
              </Box>
              <Badge fontSize="sm">{blog.category.name}</Badge>
            </HStack>
            <Heading size="lg" mt={2}>
              <Link as={NextLink} href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </Heading>
            <BodyPreviwe>
              {blog.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}
            </BodyPreviwe>
            <Text fontWeight="bold">
              <Link as={NextLink} href={`/blog/${blog.id}`}>
                Read More
              </Link>
            </Text>
          </Stack>
          <Divider mt={4} />
        </Box>
      ))}
    </Box>
  );
};

export default Article;
