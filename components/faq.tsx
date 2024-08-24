import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FAQ3 from "../components/faq3";
import Link from "next/link";

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
        "Custodia is a digital health program designed to help people reverse chronic metabolic diseases, such as type 2 diabetes, through sustainable lifestyle changes. It offers virtual care, personalized coaching, and medical supervision to address the root causes of these conditions.",
      open: true,
    },
    {
      question: "How does Custodia work?",
      answer:
        "Custodia works by providing personalized health plans that include dietary changes, continuous monitoring, and support from health coaches and doctors. The program focuses on reducing reliance on medications and promoting sustainable lifestyle changes to reverse chronic conditions.",
      open: false,
    },    
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "There is no specific information available about discounts or promotions for Custodia. It might be helpful to check directly with the company or monitor their website for any updates.",
      open: false,
    },
    {
      question: "Are there any additional costs for lab tests or medical devices?",
      answer:
        "For those on the Comprehensive plan, routine lab tests and health supplies are included. However, the Basic plan does not cover these, so there may be additional costs depending on your needs.",
      open: false,
    },
    {
      question: "What happens if I need to cancel my enrollment?",
      answer:
        "We really think you'll like our program, however if you would like to cancel your enrollment for any reason, simply send us an email at hi@custodiahealth.com",
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
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24">
      <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47] mb-14 pr-8">
        Frequently asked questions
      </h2>
      <div className="max-w-3xl">
        {faqs.map((faq, index) => (
          <FAQ3 faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="mt-10 md:mt-15">
        <div>
          <Link href="/faq">
            <a>
              <SustainButton>See all FAQs</SustainButton>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
