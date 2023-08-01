import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import labs from "../public/assets/labs.svg";
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
      <div className="flex flex-col justify-center">
        <p className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-md font-bold text-[#002A47]">
          Our treatment approach is evidence-based
        </p>
        <p className="mt-5 md:mt-6 text-base leading-6  md:text-start md:text-3lg md:max-w-lg text-[#002A47]">
          Our treatment plans are evidence-based and backed by extensive
          research. Rest assured that the care we provide is grounded in
          scientific evidence, ensuring the best outcomes for our patients.
        </p>
        <div className="mt-8 lg:mt-14 ">
          <Link href="/research">
            <SustainButton className="text-xs lg:text-base font-medium">
            Research behind our treatment
            </SustainButton>
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-col max-w-lg mt-17 md:mt-0">
        <img src={labs.src} alt="" />
      </div>
    </div>
  );
};

export default Section7;
