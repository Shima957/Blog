import { VFC } from 'react';
import { blog } from '../../types/responseDataType';
import { Box, Heading, Stack, HStack, Badge } from '@chakra-ui/react';
import DateFormat from '../../util/DateFormat';

type Props = {
  blog: blog;
};

const PostDetail: VFC<Props> = ({ blog }) => {
  return (
    <Box>
      <Stack spacing={4}>
        <Heading>{blog.title}</Heading>
        <HStack>
          <Box as="time" dateTime={blog.createdAt}>
            {DateFormat(blog.createdAt)}
          </Box>
          <Badge fontSize="sm">{blog.category.name}</Badge>
        </HStack>
        <Box dangerouslySetInnerHTML={{ __html: blog.body }} />
      </Stack>
    </Box>
  );
};

export default PostDetail;
