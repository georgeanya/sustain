import React from "react";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import hero from "../public/assets/hero-for-doctors.png";
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

const Hero = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-18 pb-20 lg:pb-36 flex flex-col lg:flex-row lg:justify-between bg-[#F0F7FF]">
      <div className="md:max-w-md lg:max-w-lg pt-15 pb-17 lg:pb-0 lg:pt-18">
        <p className="lg:pr-14  text-4lg lg:text-start lg:text-5xl font-bold text-[#002A47]">
          Effective{" "}
          <span className="text-[#4F9EEA]">metabolic disease care</span> for
          your patients
        </p>
        <p className="mt-5 md:mt-6 text-base font-normal lg:pr-8 lg:text-start lg:text-2lg text-[#476D85]">
          Custodia helps people reverse chronic metabolic diseases like diabetes
          and prediabetes using simple lifestyle changes
        </p>
        <div className="mt-8 lg:mt-14 ">
          <Link href="https://forms.gle/RZ3DwhQ4wpSX3GAw5">
            <SustainButton className="text-xs lg:text-base font-medium">
              Refer patients here
            </SustainButton>
          </Link>
        </div>
      </div>
      <div className=" lg:w-2/4 flex lg:p-10 justify-center">
        <img src={hero.src} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
