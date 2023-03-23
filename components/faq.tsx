import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FAQ from "./faq1";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
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
      <p className=" text-3xl md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47] mb-14 pr-8">
        Frequently asked questions
      </p>
      <div className="max-w-3xl">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
        {/* <hr className="my-6 md:my-8 mb-6 md:mb-12 " /> */}
      </div>
    </div>
  );
};

export default Faq;
