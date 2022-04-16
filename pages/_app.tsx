import Head from 'next/head';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Casa Verde</title>
        <meta
          name="description"
          content="Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia."
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
