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
    <div className="px-5 lg:px-32 lg:pt-2.5 pt-2.5 lg:pb-36 pb-24">
      <p className="pr-8 lg:max-w-xl text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
        Patient’s outcomes
      </p>
      <p className="mt-5 text-base  lg:text-start lg:text-lg text-[#476D85]">
        Our patients are eliminating thier medications and improving their
        health
      </p>
      <div className="flex justify-between mt-12">
        <div className="border rounded-lg w-68 text-center py-9 px-4">
          <p className="lg:max-w-xl text-2xl  lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
            95%
          </p>
          <p className="mt-3 text-base  text-[#476D85]">
            Patients reduced or eliminated their medications
          </p>
        </div>
        <div className="border rounded-lg w-68 text-center py-9 px-4">
          <p className="lg:max-w-xl text-2xl  lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
            70%
          </p>
          <p className="mt-3 text-base  text-[#476D85]">
            Patients reversed their type 2 diabetes
          </p>
        </div>
        <div className="border rounded-lg w-68 text-center py-9 px-4">
          <p className="lg:max-w-xl text-2xl  lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
            60%
          </p>
          <p className="mt-3 text-base  text-[#476D85]">
            Patients reversed their hypertension
          </p>
        </div>
        <div className="border rounded-lg w-68 text-center py-9 px-4">
          <p className="lg:max-w-xl text-2xl  lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
            12 kg
          </p>
          <p className="mt-3 text-base  text-[#476D85]">
            Average weight loss after 6 months
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
