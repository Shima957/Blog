import { Stack, Heading, Text, Button, Box, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

const ErrorPage = () => {
  return (
    <>
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Not Found
        </Heading>
        <Text fontSize="lg">
          Sorry, but we couldn’t find the page you wanted.
        </Text>
      </Stack>
      <Divider my={6} />

      <Box>
        <NextLink href="/">
          <Button colorScheme="teal">Back Home</Button>
        </NextLink>
      </Box>
    </>
  );
};
export default ErrorPage;
