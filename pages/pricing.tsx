import React from "react";
import { useState } from "react";
import icon from "../public/assets/icon.svg";
import Faq from "../components/faq";
import Navbar from "../components/navbar4";
import Footer from "../components/footer";
import Link from "next/link";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "calc(100% - 100px)",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
    width: "calc(100% - 40px)",
  },
});

const Pricing = (props: any) => {
  const [time, setTime] = useState(true);

  function toggleTimeTrue() {
    setTime((time) => (time = true));
  }
  function toggleTimeFalse() {
    setTime((time) => (time = false));
  }
  const [time1, setTime1] = useState(true);

  function toggleTime1True() {
    setTime1((time1) => (time1 = true));
  }
  function toggleTime1False() {
    setTime1((time1) => (time1 = false));
  }
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Plans &amp; pricing - Custodia Health</title>
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
          content="Choose a membership plan that’s right for you"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/pricing" property="og:url" />
        <meta content="Plans & pricing - Custodia Health" property="og:title" />
        <meta
          content="Choose a membership plan that’s right for you"
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
          content="Plans & pricing - Custodia Health"
        />
        <meta
          name="twitter:description"
          content="Choose a membership plan that’s right for you"
        />
        <meta
          name="twitter:image"
          content="https://custodiahealth.com/_next/static/media/custodia-metacard.9e18efee.png"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link href="https://custodiahealth.com/pricing" rel="canonical" />
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
      <div className="px-5 lg:px-66 md:pt-24 pt-16 pb-24 lg:pb-36 bg-[#F0F7FF]">
        <div className="flex justify-center">
          <h2 className="text-4lg text-center lg:text-5xl font-bold text-[#002A47] mb-12 md:mb-17 max-w-2xl">
            We have a membership plan made for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col justify-between md:max-w-md rounded-2xl bg-white py-10 lg:py-15">
            <div>
              {time ? (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    BASIC
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 40,000
                    <span className="md:text-lg text-base">/quarterly</span>
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    BASIC
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 70,000
                    <span className="md:text-lg text-base">/semiannually</span>
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB] justify-self-center">
                  <div
                    className={
                      time
                        ? "bg-white rounded-3xl w-1/2 py-2 cursor-pointer flex justify-center"
                        : "w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTimeTrue}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">
                      Quarterly
                    </p>
                  </div>
                  <div
                    className={
                      time
                        ? "w-1/2 py-2 flex cursor-pointer justify-center"
                        : "bg-white rounded-3xl w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTimeFalse}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">
                      Semiannually
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-5 pt-11 lg:pt-14">
                <div className="flex">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Personal health coaching
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Doctor supervision
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Unlimited consultations
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Resources, meal plan, and food guides
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Personalized care plan
                  </span>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="mt-10 lg:mt-12 flex justify-center">
                <Link href="/start">
                  <SustainButton className="text-sm  lg:text-base font-medium">
                    Get started
                  </SustainButton>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="flex justify-between flex-col md:max-w-md rounded-2xl bg-white py-10 lg:py-15">
            <div>
              {time1 ? (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    COMPREHENSIVE
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 90,000
                    <span className="md:text-lg text-base">/quarterly</span>
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    COMPREHENSIVE
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 180,000
                    <span className="md:text-lg text-base">/semiannually</span>
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB]  justify-self-center">
                  <div
                    className={
                      time1
                        ? "bg-white rounded-3xl w-1/2 py-2 cursor-pointer flex justify-center"
                        : "w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTime1True}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">Quaterly</p>
                  </div>
                  <div
                    className={
                      time1
                        ? "w-1/2 py-2 flex cursor-pointer justify-center"
                        : "bg-white rounded-3xl w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTime1False}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">
                      Semiannually
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-11 lg:pt-14 px-5 lg:px-12">
                <div className="flex">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Personal health coaching
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Doctor supervision
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Unlimited consultations
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Resources, meal plan, and food guides
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Personalized care plan
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Routine lab tests
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="self-center w-2.5 md:w-3"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Unlimited health supplies
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="justify-end">
              <div className="mt-10 lg:mt-12 flex justify-center">
                <Link href="/start">
                  <SustainButton className="text-sm  lg:text-base font-medium">
                    Get started
                  </SustainButton>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Pricing;
