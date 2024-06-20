import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Spinner from "../components/spinner";
import WhatsAppButton from "../components/whatsappbutton";
import '../lib/fontawesome'; 


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => {
      if (url !== router.asPath) {
        setIsLoading(true);
      }
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-81RCEPC1Q1"
        ></script>
        <script type="text/javascript">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-81RCEPC1Q1');`}
        </script> */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MK9F4DN');`,
          }}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MK9F4DN"
            height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
        <Component {...pageProps} />
        <WhatsAppButton/>
      </body>
    </>
  );
}

export default MyApp;
