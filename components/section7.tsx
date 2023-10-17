import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import one from "../public/assets/1.svg";
import two from "../public/assets/2.svg";
import three from "../public/assets/3.svg";
import laptop from "../public/assets/laptop.svg";
import phone from "../public/assets/phone.svg";
import meal from "../public/assets/meal.svg";
import Link from "next/link";

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

const Section7 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-28 pb-20 bg-[#EFF2FA] lg:flex justify-between">
      <p className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-sm font-bold text-[#002A47]">
        Getting started is easy
      </p>
      <div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
      <div className="mt-8 lg:mt-14 ">
        <Link href="/start">
          <SustainButton className="text-xs lg:text-base font-medium">
            Book a lab test
          </SustainButton>
        </Link>
      </div>
    </div>
  );
};

export default Section7;
