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
        "Custodia is a virtual care program that empowers people to reverse chronic metabolic diseases like type 2 diabetes through sustainable lifestyle change.",
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
