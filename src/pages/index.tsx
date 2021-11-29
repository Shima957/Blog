import Head from 'next/head';
import { VFC } from 'react';
import Pagination from '../components/Pagination';
import Posts from '../components/Posts';
import { client } from '../libs/client';
import { blog, cmsData } from '../types/responseDataType';

type Props = {
  blogs: blog[];
  totalCount: number;
};

const Home: VFC<Props> = ({ blogs, totalCount }) => {
  return (
    <>
      <Head>
        <html lang="ja" />
        <title>ShimaBlo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Posts blogs={blogs} />
      {totalCount >= 5 ? <Pagination totalCount={totalCount} /> : null}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data: cmsData<blog[]> = await client.get({
    endpoint: 'blog',
    queries: { offset: 0, limit: 5 },
  });

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};
