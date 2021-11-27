import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import { AppProps } from 'next/dist/shared/lib/router/router';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
