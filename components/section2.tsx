import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import circle from "../public/assets/circle.png";

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

const Section2 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#236DAD] flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:max-w-xl">
        <p className=" pb-6 text-2xl lg:text-start lg:text-4xl font-bold text-white">
          We reverse multiple chronic metabolic diseases
        </p>
        <div className="flex mt-8">
          <img src={circle.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base lg:text-xl">
            Type 2 diabetes
          </span>
        </div>
        <div className="flex mt-8">
          <img src={circle.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base lg:text-xl">
            Prediabetes
          </span>
        </div>
        <div className="flex mt-8 mb-8">
          <img src={circle.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base lg:text-xl">
            Hypertension
          </span>
        </div>
      </div>
      <div className="lg:max-w-lg lg:pr-8">
        <p className="mt-5 md:mt-6 lg:mt-0 text-base  lg:text-start lg:text-xl text-white">
          Most treatments use things like medications or surgery to manage the
          symptoms of chronic metabolic diseases without dealing with the
          underlying cause.
        </p>
        <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl text-white">
          We focus on treating the root cause of the health condition by
          changing what you eat. Our doctors and health coaches support you and
          remotely monitor you to help you go off medications safely and sustain
          your success.
        </p>
        <div className="mt-8 lg:mt-14 ">
          <SustainButton className="text-xs lg:text-base font-medium">
            Schedule your free consult
          </SustainButton>
        </div>
      </div>
    </div>
  );
};

export default Section2;
