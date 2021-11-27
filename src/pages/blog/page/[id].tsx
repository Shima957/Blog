import { GetStaticPaths, GetStaticProps } from 'next';
import { cmsData, blog } from '../../../types/responseDataType';
import { client } from '../../../libs/client';
import { ParsedUrlQuery } from 'querystring';
import { VFC } from 'react';
import Posts from '../../../components/Posts/Posts';
import Pagination from '../../../components/Pagination/Pagination';

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blogs: blog[];
  totalCount: number;
};

const PER_PAGE = 5;

const BlogPage: VFC<Props> = ({ blogs, totalCount }) => {
  return (
    <>
      <Posts blogs={blogs} />
      <Pagination totalCount={totalCount} />
    </>
  );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: cmsData<blog[]> = await client.get({ endpoint: 'blog' });
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (data) => `/blog/page/${data}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params.id as unknown as number;
  const data: cmsData<blog[]> = await client.get({
    endpoint: 'blog',
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  };
};
