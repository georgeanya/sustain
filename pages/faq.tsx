import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FAQ from "../components/faq1";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
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
      <Navbar1/>
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
