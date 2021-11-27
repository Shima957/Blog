import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import Header from '../Header/Header';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Container maxW="container.lg" mt={8}>
      {children}
    </Container>
  </>
);

export default Layout;
