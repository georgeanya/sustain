import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import labs from "../public/assets/labs.svg";

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

const Section7 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#EFF2FA] lg:flex justify-between">
      <div className="">
        <p className=" text-3xl lg:text-start lg:text-4xl md:max-w-sm font-bold text-[#002A47]">
          Not sure if you have diabetes/prediabetes? Get diagnosed.
        </p>
        <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl md:max-w-lg text-[#002A47]">
          We partnered with Healthtracka to make it easy for you to get
          diagnosed from the comfort of your home. Your result will be emailed
          to you within 48-72 hours, and our doctor will call you to explain the
          results.
        </p>
        <div className="mt-8 lg:mt-14 ">
          <SustainButton className="text-xs lg:text-base font-medium">
            Book a lab test
          </SustainButton>
        </div>
      </div>
      <div className="flex justify-center flex-col max-w-lg mt-17 md:mt-0">
        <img src={labs.src} alt=""  />
      </div>
    </div>
  );
};

export default Section7;
