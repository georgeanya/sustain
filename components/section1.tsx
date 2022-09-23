import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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

const Section1 = () => {
  return (
    <div className="px-5 sm:px-8 md:px-16 lg:px-32 lg:pt-12 md:max-w-2xl lg:max-w-5xl">
      <p className="pt-12 lg:pt-16 text-2xl lg:text-start lg:text-4xl font-bold text-[#002A47]">
        We understand you
      </p>
      <p className="mt-6 text-base  lg:text-start lg:text-xl text-[#476D85]">
        If you have been living with a chronic metabolic disease, there’s a high
        chance you’re probably feeling frustrated and scared. No matter what you
        do, your blood sugar or blood pressure continues to go up and you don’t
        feel well. The medications you have to take keep increasing, costing a
        lot of money. Nothing seems to work, and you don’t feel well.
      </p>
      <p className="mt-6 text-base  lg:text-start lg:text-xl text-[#476D85]">
        Don’t give up; Sustain is here to help.
      </p>
      <SustainButton className="mt-8 lg:mt-14 mb-12 lg:mb-32 text-xs lg:text-base font-medium">
        Schedule your free consult
      </SustainButton>
    </div>
  );
};

export default Section1;
