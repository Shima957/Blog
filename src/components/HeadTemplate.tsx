import Head from 'next/head';
import { VFC } from 'react';

type Props = {
  pageTitle: string;
  pageDescription: string;
  pageImg: string;
  pageUrl: string;
};

const HeadTempalte: VFC<Props> = (props) => {
  return (
    <Head>
      <html lang="ja" />
      <title>{props.pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta property="og:description" content={props.pageDescription} />
      <meta property="og:title" content={props.pageTitle} />
      <meta property="og:site_name" content={props.pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:url" content={props.pageUrl} />
      <meta property="og:image" content={props.pageImg} />
      <meta property="og:image:width" content="1200px" />
      <meta property="og:image:height" content="630px" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.pageTitle} />
      <meta name="twitter:description" content={props.pageDescription} />
      <meta name="twitter:image" content={props.pageImg} />
      <meta name="twitter:url" content={props.pageImg} />
    </Head>
  );
};

export default HeadTempalte;
