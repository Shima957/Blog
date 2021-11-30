import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../libs/client';
import { cmsData, blog } from '../../types/responseDataType';
import { ParsedUrlQuery } from 'querystring';
import { VFC } from 'react';
import PostDetail from '../../components/PostDetail';
import HeadTempalte from '../../components/HeadTemplate';
import { useRouter } from 'next/router';
import { createOgImage } from '../../util/createOgImage';
import { isDraft } from '../../util/typeGuard';

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blog: blog;
};

const BlogId: VFC<Props> = ({ blog }) => {
  const router = useRouter();

  const { ogImageUrl } = createOgImage(
    process.env.NEXT_PUBLIC_BASE_IMAGE_URL,
    blog.title
  );

  return (
    <>
      <HeadTempalte
        pageTitle={`${blog.title} - ShimaBlo`}
        pageUrl={decodeURI(router.asPath)}
        pageImg={ogImageUrl}
        pageDescription={blog.description}
      />
      <PostDetail blog={blog} />
    </>
  );
};

export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: cmsData<blog[]> = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { params, previewData } = context;

  const draftKey = isDraft(previewData)
    ? { draftKey: previewData.draftKey }
    : {};

  const data: blog = await client.get({
    endpoint: 'blog',
    contentId: params.id,
    queries: draftKey,
  });

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      blog: data,
    },
  };
};
