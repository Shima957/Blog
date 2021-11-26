import { Container } from '@chakra-ui/react';
import { FC } from 'react';

const BaseWith: FC = ({ children }) => (
  <Container maxW="container.lg">{children}</Container>
);

export default BaseWith;
