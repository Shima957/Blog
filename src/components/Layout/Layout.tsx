import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import Header from '../Header/Header';
import styled from '@emotion/styled';
import Footer from '../Footer/Footer';

const PostsArea = styled.main`
  min-height: calc(100vh - 84px - 70px);
  padding: 70px 0;
`;

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Container maxW="container.lg" as="main">
      <PostsArea>{children}</PostsArea>
    </Container>
    <Footer />
  </>
);

export default Layout;
