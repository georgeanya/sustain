import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import hero from "../public/assets/hero.png";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "16px 30px",
  margin: "0px 0px",
  borderRadius: "10px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});
const SustainButton1 = styled(Button)({
  fontFamily: "Circular Std",
  color: "#4F9EEA",
  padding: "16px 30px",
  margin: "0px 0px",
  borderRadius: "10px",
  textTransform: "none",
  border: "solid 1px #4F9EEA !important",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

const Hero = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-22 pb-6 lg:pb-36 flex flex-col lg:flex-row lg:justify-between">
      <div className=" pt-15 pb-17 lg:pb-0 lg:pt-18">
        <p className=" md:max-w-md lg:max-w-xl leading-tight lg:leading-tight  text-3xl lg:text-start lg:text-5xl font-bold text-[#002A47] ">
          Break free from cardiometabolic disease and lifelong medication
        </p>
        <p className="md:max-w-md lg:max-w-lg mt-5 md:mt-6 text-base  lg:text-start lg:text-xl text-[#476D85]">
          We help people reverse chronic metabolic diseases and reduce their
          dependence on medications by identifying the root causes of disease
          and treating them
        </p>
        <div className="md:max-w-md lg:max-w-lg mt-8 lg:mt-14">
          <SustainButton className="text-sm font-semibold">
            Request access
          </SustainButton>
          <SustainButton1 className="text-sm ml-8 font-semibold">
            Learn More
          </SustainButton1>
        </div>
      </div>
      <div className=" lg:w-2/4 flex lg:p-10 justify-center">
        <img src={hero.src} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
