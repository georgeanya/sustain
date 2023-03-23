import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";

import Hero from "../components/hero";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section6 from "../components/section6";
import Section5 from "../components/section5";
import Faq from "../components/faq";
import Section7 from "../components/section7";
import Navbar from "../components/navbar";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";

const Home: NextPage = () => {
  const [time, setTime] = useState(false);

  function toggleTimeTrue() {
    setTime((time) => (time = true));
  }
  function toggleTimeFalse() {
    setTime((time) => (time = false));
  }

  return (
    <div>
      <Head>
        <title>
          Custodia Health - Say goodbye to type 2 diabetes and medications
        </title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, reverse diabetes, high cholesterol, lifebox labs, hypertension"
        />
        <meta
          name="description"
          content="Custodia Health is an online specialty clinic for safely reversing chronic metabolic disease like type 2 diabetes and prediabetes"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/" property="og:url" />
        <meta
          content="Custodia Health - Say goodbye to type 2 diabetes and medications"
          property="og:title"
        />
        <meta
          content="Custodia Health is an online specialty clinic for safely reversing chronic metabolic disease like type 2 diabetes and prediabetes"
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
          content="https://www.instagram.com/custodiahealth/"
          property="og:see_also"
        />
        <meta
          content="https://www.youtube.com/channel/UCiGJtOjJyegn_5naUTUFMuQ"
          property="og:see_also"
        />
        <meta
          content="https://www.linkedin.com/company/custodia-health/"
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
          content="Custodia Health - Say goodbye to type 2 diabetes and medications"
        />
        <meta
          name="twitter:description"
          content="Custodia Health is an online specialty clinic for safely reversing chronic metabolic disease like type 2 diabetes and prediabetes"
        />
        <meta name="twitter:image" content={metaCard.src} />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link href="https://custodiahealth.com/" rel="canonical" />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section6
        time={time}
        toggleTrue={toggleTimeTrue}
        toggleFalse={toggleTimeFalse}
      /> */}
      <Section7 />
      <Faq />
    </div>
  );
};

export default Home;
