import Head from "next/head";
import React from "react";
import Form from "../components/form";
import Navbar3 from "../components/navbar3";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";

const Start = () => {
  return (
    <div>
      <Head>
        <title>Book a consultation - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, cold sores, genital herpes, male infertility"
        />
        <meta
          name="description"
          content="Book your consultation now with a doctor. Get a prescription in 24 hours. Have your treatments delivered to your home within 48 hours."
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/start" property="og:url" />
        <meta content="Book a consultation - Priv Health" property="og:title" />
        <meta
          content="Book your consultation now with a doctor. Get a prescription in 24 hours. Have your treatments delivered to your home within 48 hours."
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta content="An image of the Priv logo" property="og:image:alt" />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          content="https://facebook.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryprivhealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryprivhealth" />
        <meta name="twitter:creator" content="@tryprivhealth" />
        <meta
          name="twitter:title"
          content="Book a consultation - Priv Health"
        />
        <meta
          name="twitter:description"
          content="Book your consultation now with a doctor. Get a prescription in 24 hours. Have your treatments delivered to your home within 48 hours."
        />
        <meta name="twitter:image" content={metaCard.src} />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta name="twitter:image:alt" content="An image of the Priv logo" />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/start" rel="canonical" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
      </Head>
      <Navbar3 />
      <Form />
    </div>
  );
};

export default Start;
