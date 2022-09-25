import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import hero from "../public/assets/hero.png";

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

const Hero = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-20 flex flex-col lg:flex-row lg:justify-between">
      <div className="md:max-w-md lg:max-w-xl">
        <p className=" leading-tight lg:leading-tight pt-12 lg:pt-16 text-3xl lg:text-start lg:text-5xl font-bold text-[#002A47] ">
          Say goodbye to chronic metabolic diseases and lifelong medication
        </p>
        <p className="mt-6 text-base  lg:text-start lg:text-xl text-[#476D85]">
          We help people reverse chronic metabolic diseases and reduce their
          dependence on medications by identifying the root causes of disease
          and treating them
        </p>
        <div className="mt-8 lg:mt-14 mb-12 lg:mb-32">
        <SustainButton className="text-xs lg:text-base font-medium">
          Schedule your free consult
        </SustainButton>
      </div>
      </div>
      <div className="mb-16 lg:w-2/4 flex lg:p-10 justify-center">
        <img src={hero.src} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
