import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";
import support from "../public/assets/support.svg";
import FAQ2 from "./faq2";

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

const Section4 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Who is Priv for?",
      answer:
        "Priv is for adults experiencing health issues or wanting to improve or support their health and prefer to do so from the comfort of their homes.",
      open: true,
    },
    {
      question: "How does Priv work?",
      answer:
        "First, book a consultation and with one of our doctors. The doctor will review your information and recommend a personalised treatment. Priv will ship your treatment for free in discreet packaging if prescribed.",
      open: false,
    },
    {
      question: "How much does it cost to consult a doctor on Priv?",
      answer: "It cost 4,000 naira to consult a doctor on Priv",
      open: false,
    },
    {
      question: "Are your doctors licensed?",
      answer: "Our doctors are experts licensed to practice in Nigeria",
      open: false,
    },
    {
      question: "Are my consultations private?",
      answer:
        "All consultations on Priv are carried out in the strictest respect of medical secrecy.",
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
    console.log("click " + index);
  };

  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#EFF2FA] lg:flex justify-between">
      <div className="max-w-3xl">
        <p className=" text-3xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
          Get all the support you need
        </p>
        <p className="mt-5 md:mt-6 mb-16 md:mb-24 text-base  lg:text-start lg:text-xl md:max-w-xl text-[#002A47]">
          We give you the tools and support you need to reverse your condition
          and take control of your health.
        </p>
        <div className="max-w-xl min-w-full">
          <div>
            {faqs.map((faq, index) => (
              <FAQ2 faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
            <div className="mt-6 lg:mt-16 ">
              <SustainButton className="text-xs lg:text-base font-medium">
                Book a consultation now
              </SustainButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start lg:mt-40 max-w-xl mt-17">
        <img src={support.src} alt="" className="w-11/12" />
      </div>
    </div>
  );
};

export default Section4;
