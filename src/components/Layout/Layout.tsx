import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import Header from '../Header/Header';
import styled from '@emotion/styled';
import Footer from '../Footer/Footer';

const PostsArea = styled.section`
  min-height: calc(100vh - 88px - 88px);
  padding: 70px 0;
`;

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW="container.lg" as="main">
        <PostsArea>{children}</PostsArea>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
