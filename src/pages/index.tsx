import Head from 'next/head';
import Article from '../components/Posts/Posts';
import { client } from '../libs/client';

const Home = ({ blog }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Article blog={blog} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
