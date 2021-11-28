import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../../libs/client';
import { blog, cmsData } from '../../../types/responseDataType';
import { VFC } from 'react';
import Posts from '../../../components/Posts/Posts';
import Head from 'next/head';

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blogs: blog[];
};

const BlogCategory: VFC<Props> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>ShimaBlo</title>
      </Head>
      <Posts blogs={blogs} />
    </>
  );
};

export default BlogCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: cmsData<blog[]> = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map(
    (content) => `/blog/category/${content.category.id}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { id } = context.params;
  const data: cmsData<blog[]> = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[equals]${id}` },
  });

  const category = data.contents.map((content) => content.category.name);

  return {
    props: {
      blogs: data.contents,
      category: category,
    },
  };
};
