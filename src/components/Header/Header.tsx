import {
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import { categories, cmsData } from '../../types/responseDataType';
import { client } from '../../libs/client';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const [categories, setCategories] = useState<categories[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data: cmsData<categories[]> = await client.get({
        endpoint: 'categories',
      });

      setCategories([...data.contents]);
    };

    fetchCategories();
  }, []);

  return (
    <Flex as="header" h="88px" boxShadow="base" alignItems="center">
      <Container maxW="container.lg" as="nav">
        <Flex justifyContent="space-between">
          <Heading size="lg">
            <Link as={NextLink} href={`/`}>
              ShimaBlo
            </Link>
          </Heading>
          <Flex gridGap={4}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                カテゴリー
              </MenuButton>
              <MenuList>
                {categories.map((category) => (
                  <Link
                    as={NextLink}
                    href={`/blog/category/${category.id}`}
                    key={category.id}
                  >
                    <MenuItem>{category.name}</MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
            <IconButton
              aria-label="toggle"
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              colorScheme={useColorModeValue('purple', 'orange')}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
