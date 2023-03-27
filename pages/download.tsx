import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import app from "../public/assets/app.png";
import apple from "../public/assets/apple.png";
import play from "../public/assets/play.png";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";

const Download = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Download our App - Custodia Health</title>
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
          content="Download the Custodia Health on android and iOS"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/start" property="og:url" />
        <meta
          content="Download our App - Custodia Health"
          property="og:title"
        />
        <meta
          content="Download the Custodia Health on android and iOS"
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
          content="Download our App - Custodia Health"
        />
        <meta
          name="twitter:description"
          content="Download the Custodia Health on android and iOS"
        />
        <meta name="twitter:image" content={metaCard.src} />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link href="https://custodiahealth.com/download" rel="canonical" />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
      </Head>
      <Navbar1 />
      <div className="px-5 lg:px-32 lg:flex lg:justify-between">
        <div className="lg:max-w-lg lg:mt-32">
          <h2 className="pt-12 text-4lg md:text-center lg:text-start lg:text-5xl font-bold text-[#002A47]">
            Download Custodia for iOS and Android
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-center lg:text-start lg:text-2lg text-[#476D85]">
            Download our app to begin your journey towards lasting health
          </p>
          <div className="flex md:justify-center lg:justify-start mt-7">
            <img src={play.src} className="mr-3 lg:mr-4" alt="" />
            <img src={apple.src} alt="" />
          </div>
        </div>
        <div className="my-20 lg:w-1/2 lg:mt-20 lg:mb-36 flex justify-center">
          <img src={app.src} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Download;
