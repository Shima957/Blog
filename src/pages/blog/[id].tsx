import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../libs/client';
import { cmsData, blog } from '../../types/responseDataType';
import { ParsedUrlQuery } from 'querystring';
import { VFC } from 'react';
import PostDetail from '../../components/PostDetail';

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blog: blog;
};

const BlogId: VFC<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title} ― ShimaBlo</title>
      </Head>
      <PostDetail blog={blog} />
    </>
  );
};

export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: cmsData<blog[]> = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { id } = context.params;
  const data: blog = await client.get({
    endpoint: 'blog',
    contentId: id,
  });

  return {
    props: {
      blog: data,
    },
  };
};
