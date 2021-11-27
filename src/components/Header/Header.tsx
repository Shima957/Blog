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
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import { categories, cmsData } from '../../types/responseDataType';
import { client } from '../../libs/client';

const Header = () => {
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
      <Container maxW="container.lg">
        <Flex justifyContent="space-between">
          <Heading size="lg">
            <Link as={NextLink} href={`/`}>
              ShimaBlo
            </Link>
          </Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              カテゴリー
            </MenuButton>
            <MenuList>
              {categories.map((category) => (
                <Link
                  as={NextLink}
                  key={category.id}
                  href={`/category/${category.name}`}
                >
                  <MenuItem>{category.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
