import Head from 'next/head';
import { VFC } from 'react';
import Header from '../components/Header/Header';
import BaseWith from '../components/Layout/BaseWith';
import Article from '../components/Posts/Posts';
import { client } from '../libs/client';
import { blog, categories, cmsData } from '../types/responseDataType';

type Props = {
  blogs: blog[];
  categories: categories[];
};

const Home: VFC<Props> = ({ blogs, categories }) => {
  return (
    <>
      <Head>
        <title>ShimaBlo</title>
      </Head>
      <Header categories={categories} />
      <BaseWith>
        <Article blogs={blogs} />
      </BaseWith>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const blog: cmsData = await client.get({ endpoint: 'blog' });
  const categories: cmsData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blogs: blog.contents,
      categories: categories.contents,
    },
  };
};
