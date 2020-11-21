import '../styles/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link rel='menifest' href='/site.webmanifest' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
