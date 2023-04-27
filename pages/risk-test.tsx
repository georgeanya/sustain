import React from "react";
import Navbar from "../components/navbar4";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});
const RiskTest = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 lg:px-66 md:pt-38 pt-16 pb-24 lg:pb-36 bg-[#F0F7FF]">
        <div className="flex flex-col items-center">
          <h2 className="text-4lg text-center lg:text-5xl font-bold text-[#002A47] max-w-3xl">
            Know your risk for type 2 diabetes in less than 60 seconds
          </h2>
          <p className="mt-6 text-base md:text-center lg:text-2lg text-[#476D85] max-w-l">
            1 in 3 Nigerian adults has type 2 diabetes, and more than 84% of
            people with type 2 diabetes don’t know they have it. Meanwhile, type
            2 diabetes can easily be reversed. Take the risk test now to see
            where you stand.
          </p>
          <div className="mt-7 md:mt-9">
            <SustainButton
              className="text-xs md:text-base font-medium"
              href="/"
            >
              Take the test now
            </SustainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskTest;
