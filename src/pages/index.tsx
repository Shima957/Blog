import Head from 'next/head';
import { VFC } from 'react';
import Posts from '../components/Posts/Posts';
import { client } from '../libs/client';
import { blog, cmsData } from '../types/responseDataType';

type Props = {
  blogs: blog[];
};

const Home: VFC<Props> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>ShimaBlo</title>
      </Head>
      <Posts blogs={blogs} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const blog: cmsData<blog[]> = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};
