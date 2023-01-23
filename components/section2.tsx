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
    <div className="px-5 lg:px-32 lg:pt-2.5 pt-2.5 lg:pb-36 pb-24">
      <div className="lg:max-w-xl">
        <p className="pr-8 text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
          Our treatment is different
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:max-w-lg">
          <p className="mt-5 text-base  lg:text-start lg:text-lg text-[#476D85]">
            At Sustain, we focus on treating the root cause of cardiometabolic
            diseases to help you repair your metabolic health.
          </p>
          <div className="flex mt-8">
            <img src={circle.src} className='w-8' alt="" />
            <span className="ml-4 flex self-center text-[#476D85] text-base lg:text-xl">
              Type 2 diabetes
            </span>
          </div>
          <hr className="my-4 lg:my-5 lg:max-w-lg" />
          <div className="flex mt-8">
            <img src={circle.src} className='w-8' alt="" />
            <span className="ml-4 flex self-center text-[#476D85] text-base lg:text-xl">
              Prediabetes
            </span>
          </div>
          <hr className="my-4 lg:my-5 lg:max-w-lg" />
          <div className="flex mt-8 mb-8">
            <img src={circle.src} className='w-8' alt="" />
            <span className="ml-4 flex self-center text-[#476D85] text-base lg:text-xl">
              Hypertension
            </span>
          </div>
        </div>
        <div className="lg:max-w-lg lg:pr-8">
          <p className="mt-5 md:mt-6 lg:mt-5 text-base  lg:text-start lg:text-lg text-[#476D85]">
            We use therapeutic carbohydrate restriction (TCR), continuous remote
            monitoring, and behavioral science to help you adopt a low
            carbohydrate diet sustainably and go off medications safely
          </p>
          <p className="mt-5 mb-5 md:mt-6 text-base  lg:text-start lg:text-lg text-[#476D85]">
            Multiple studies show that therapeutic carbohydrate restriction is
            an effective, evidence-based approach to reversing cardiometabolic
            diseases
          </p>
          <a className="mt-5 md:mt-8 text-base  lg:text-start lg:text-lg  text-[#1DA1F2] underline underline-offset-1">
            Learn more about therapeutic carbohydrate restriction
          </a>
          {/* <div className="mt-8 lg:mt-14 ">
            <SustainButton className="text-xs lg:text-base font-medium">
              Schedule your free consult
            </SustainButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
