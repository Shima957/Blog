import {
  Flex,
  Link,
  Container,
  Text,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      h="88px"
      borderTop="1px"
      borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      alignItems="center"
    >
      <Container maxW="container.lg">
        <Stack>
          <Flex justifyContent="space-evenly">
            <Link href="https://twitter.com/ShimaOh2a" isExternal>
              Twitter
            </Link>
            <Link href="https://github.com/Shima957" isExternal>
              GitHub
            </Link>
            <Link href="https://soundcloud.com/shima_music" isExternal>
              SoundCloud
            </Link>
          </Flex>
          <Flex justifyContent="center">
            <Text color="gray.400">©2021 Shima All rights reserved.</Text>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Footer;
