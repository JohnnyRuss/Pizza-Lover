import Head from 'next/head';

function Heading({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='greate place for pizza lovers. order pizza with us, with pizza lover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
}

export default Heading;
