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
import ErrorPage from '../../components/ErrorPage';
import PreviewAnnounce from '../../components/PreviewAnnounce';
import { Box } from '@chakra-ui/layout';

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  blog: blog;
  draftKey: { draftKey: string } | { draftKey?: undefined };
};

const BlogId: VFC<Props> = ({ blog, draftKey }) => {
  const router = useRouter();

  const { ogImageUrl } = createOgImage(
    process.env.NEXT_PUBLIC_BASE_IMAGE_URL,
    blog.title
  );

  if (!blog) {
    return <ErrorPage />;
  }

  return (
    <>
      <HeadTempalte
        pageTitle={`${blog.title} - ShimaBlo`}
        pageUrl={decodeURI(router.asPath)}
        pageImg={ogImageUrl}
        pageDescription={blog.description}
      />
      {draftKey ? <PreviewAnnounce /> : null}
      <Box pt={20}>
        <PostDetail blog={blog} />
      </Box>
    </>
  );
};

export default BlogId;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: cmsData<blog[]> = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { id } = context.params;

  const draftKey = isDraft(context.previewData)
    ? { draftKey: context.previewData.draftKey }
    : {};

  const data: blog = await client.get({
    endpoint: 'blog',
    contentId: id,
    queries: draftKey,
  });

  return {
    props: {
      blog: data,
      draftKey: draftKey,
    },
  };
};
