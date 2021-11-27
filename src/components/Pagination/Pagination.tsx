import { Link, Button, HStack, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';
import { useRouter } from 'next/router';

const Pagenation: VFC<{ totalCount: number }> = ({ totalCount }) => {
  const router = useRouter();
  const { id } = router.query;

  const PER_PAGE = 5;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <Center>
      <HStack spacing={4}>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map(
          (number: number, index) => (
            <Link as={NextLink} href={`/blog/page/${number}`} key={index}>
              <Button
                colorScheme={
                  Number(id) === number || (id === undefined && number === 1)
                    ? 'blue'
                    : null
                }
              >
                {number}
              </Button>
            </Link>
          )
        )}
      </HStack>
    </Center>
  );
};

export default Pagenation;
