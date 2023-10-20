import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Section2 from "../components/section2-for-doctors";
import Hero from "../components/hero-for-doctors";
import Section4 from "../components/section4-for-doctors";
import Section3 from "../components/section3-for-doctors";
import Section5 from "../components/section5-for-doctors";
import Section7 from "../components/section7-for-doctors";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/provider-metacard.jpg";
import Head from "next/head";
import Section1 from "../components/section1-for-doctors";

const ForDoctors = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Healthcare Providers - Custodia Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, reverse diabetes, high cholesterol, lifebox labs, hypertension"
        />
        <meta
          name="description"
          content="Learn how Custodia Health partners with primary care doctors and other health professionals to help patients put type 2 diabetes in remission safely"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta
          content="https://custodiahealth.com/healthcare-providers"
          property="og:url"
        />
        <meta
          content="Healthcare Providers - Custodia Health"
          property="og:title"
        />
        <meta
          content="Learn how Custodia Health partners with primary care doctors and other health professionals to help patients put type 2 diabetes in remission safely"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta
          content="An image of the Custodia Health logo"
          property="og:image:alt"
        />
        <meta
          content="https://www.instagram.com/custodiahealth"
          property="og:see_also"
        />
        <meta
          content="https://www.linkedin.com/company/custodia-health"
          property="og:see_also"
        />
        <meta
          content="https://www.facebook.com/custodiahealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/custodiahealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@custodiahealth" />
        <meta name="twitter:creator" content="@custodiahealth" />
        <meta
          name="twitter:title"
          content="Healthcare Providers - Custodia Health"
        />
        <meta
          name="twitter:description"
          content="Learn how Custodia Health partners with primary care doctors and other health professionals to help patients put type 2 diabetes in remission safely"
        />
        <meta
          name="twitter:image"
          content="https://custodiahealth.com/_next/static/media/provider-metacard.d2b2096e.jpg"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link
          href="https://custodiahealth.com/healthcare-providers"
          rel="canonical"
        />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="facebook-domain-verification"
          content="nkzhwppp6o24gs2ndw0p0pjyfvijts"
        />
      </Head>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default ForDoctors;
