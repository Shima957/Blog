import {
  Box,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { VFC } from 'react';
import { categories } from '../../types/responseDataType';
import BaseWith from '../Layout/BaseWith';

type Props = {
  categories: categories[];
};

const Header: VFC<Props> = ({ categories }) => {
  return (
    <Box as="header" p={4} boxShadow="base">
      <BaseWith>
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
                <MenuItem key={category.id}>{category.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </BaseWith>
    </Box>
  );
};

export default Header;
