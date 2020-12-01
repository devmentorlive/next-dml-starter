import Head from 'next/head';
import Layout from '../layout';

export default function Page({
  children,
  title,
  description,
  canonical,
}) {
  const defaultTitle = 'Hello world and happy hacking!';
  const defaultDescription =
    'This is the homepage for the nextjs starter kit.';
  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta
          name='description'
          content={description || defaultDescription}
        />
        {canonical && <link rel='canonical' href={canonical} />}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>

      <Layout>{children}</Layout>
    </>
  );
}
