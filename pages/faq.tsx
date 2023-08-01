import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FAQ from "../components/faq1";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Custodia?",
      answer:
        "Custodia is a digital care program that empowers people to reverse chronic metabolic diseases through sustainable lifestyle change.",
      open: true,
    },
    {
      question: "Who is Custodia for?",
      answer:
        "Custodia is for people who want to reverse metabolic diseases like type 2 diabetes, prediabetes, and hypertension.",
      open: false,
    },
    {
      question: "Are medications included in the treatment?",
      answer: "No, there are no medications included in the treatment.",
      open: false,
    },
    {
      question: "Is exercise required?",
      answer:
        "Exercise is not required for success. We encourage you to choose whatever level of physical activity you desire.",
      open: false,
    },
    {
      question: "Is Custodia free?",
      answer: "No, Visit our pricing page to see the costs.",
      open: false,
    },
    {
      question: "Can type 2 diabetes be reversed without medication?",
      answer:
        "A lot of scientific studies have confirmed that through diet changes and weight loss, the process underlying type 2 diabetes can be put into remission without the help of medication.",
      open: false,
    },
    {
      question: "How is diabetes reversal measured?",
      answer:
        "Type 2 diabetes reversal is officially in remission when HbA1c levels drop to below 6.5% (48mmol/mol) and stay there for 3 months without the help of medication.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>FAQs - Custodia Health</title>
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
          content="Custodia Health's frequenty asked questions"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/faq" property="og:url" />
        <meta content="FAQs - Custodia Health" property="og:title" />
        <meta
          content="Custodia Health's frequenty asked questions"
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
        <meta name="twitter:title" content="FAQs - Custodia Health" />
        <meta
          name="twitter:description"
          content="Custodia Health's frequenty asked questions"
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
        <link href="https://custodiahealth.com/faq" rel="canonical" />
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
      <Navbar1 />
      <div className="px-5 md:pl-72 md:pr-96 md:mt-24 mt-16 md:pb-36 pb-24">
        <h2 className="text-4lg md:text-center lg:text-start lg:text-5xl font-bold text-[#002A47]">
          FAQs
        </h2>
        <p className="mt-5 md:mt-6 text-base md:text-start mb-7 md:mb-14 md:text-2lg leading-6 text-[#476D85]">
          Find answers to commonly asked questions about our treatment,
          enrollment process, cost, and privacy
        </p>
        <div className="max-w-3xl mt-17 md:mt-18">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
