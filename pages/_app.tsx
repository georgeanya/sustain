import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-81RCEPC1Q1"
        ></script>
        <script>
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-81RCEPC1Q1');`}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
