import { VFC } from 'react';
import { blog } from '../../types/responseDataType';
import { Box, Heading } from '@chakra-ui/react';
import DateFormat from '../../util/DateFormat';

type Props = {
  blog: blog;
};

const PostDetail: VFC<Props> = ({ blog }) => {
  return (
    <Box>
      <Heading>{blog.title}</Heading>
      <Box as="time" dateTime={blog.createdAt}>
        {DateFormat(blog.createdAt)}
      </Box>
      <Box dangerouslySetInnerHTML={{ __html: blog.body }} />
    </Box>
  );
};

export default PostDetail;
