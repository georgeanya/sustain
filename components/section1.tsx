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
    <div className="px-5 sm:px-8 md:px-16 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 ">
      <p className=" text-2xl lg:text-start lg:text-4xl font-bold text-[#002A47]">
        We understand you
      </p>
      <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl text-[#002A47] md:max-w-2xl lg:max-w-3xl">
        If you have been living with a chronic metabolic disease, there’s a high
        chance you’re probably feeling frustrated and scared. No matter what you
        do, your blood sugar or blood pressure continues to go up and you don’t
        feel well. The medications you have to take keep increasing, costing a
        lot of money. Nothing seems to work, and you don’t feel well.
      </p>
      <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl text-[#002A47] md:max-w-2xl lg:max-w-3xl">
        The medications you have to take keep increasing and these medications
        cost a lot of money. and your condition steals your time by limiting
        your ability to do the things you love.
      </p>
      <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl text-[#002A47]">
        Don’t give up; Custodia is here to help.
      </p>
      <div className="mt-8 lg:mt-14 ">
        <SustainButton className="text-xs lg:text-base font-medium">
          Book a consultation now
        </SustainButton>
      </div>
    </div>
  );
};

export default Section1;
