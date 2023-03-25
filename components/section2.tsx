import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import type2 from "../public/assets/type2.svg";
import hyper from "../public/assets/hyper.svg";
import pret2 from "../public/assets/pret2.svg";
import dysli from "../public/assets/dysli.svg";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Section2 = () => {
  return (
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 bg-[#236DAD] flex flex-col md:flex-row md:justify-between">
      <div className="md:max-w-xl">
        <p className=" pb-6 text-3xl md:text-start md:text-4xl font-bold text-white">
          We treat multiple chronic metabolic diseases
        </p>
        <div className="flex mt-8 md:mt-11">
          <img src={type2.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base md:text-xl">
            Type 2 diabetes
          </span>
        </div>
        <div className="flex mt-6 md:mt-8">
          <img src={pret2.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base md:text-xl">
            Prediabetes
          </span>
        </div>
        <div className="flex mt-6 md:mt-8">
          <img src={dysli.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base md:text-xl">
            Dyslipidemia
          </span>
        </div>
        <div className="flex mt-8 md:mt-8 mb-6">
          <img src={hyper.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base md:text-xl">
            Hypertension
          </span>
        </div>
      </div>
      <div className="md:max-w-lg md:pr-8">
        <p className="mt-7 md:mt-0 text-base  md:text-start md:text-xl text-white">
          Most treatments use things like medications or surgery to manage the
          symptoms of chronic metabolic diseases without dealing with the
          underlying cause.
        </p>
        <p className="mt-7 md:mt-9 text-base  md:text-start md:text-xl text-white">
          We focus on treating the root cause of the disease by changing what
          you eat and helping you make sustainable lifestyle changes.
        </p>
        <p className="mt-7 md:mt-9 text-base  md:text-start md:text-xl text-white">
          Our doctors and health coaches support you and remotely monitor you to
          help you go off medications safely and sustain your success.
        </p>
        <div className="mt-10 md:mt-15 ">
         <Link href="/start"> <SustainButton className="text-xs md:text-base font-medium">
            Research behind our treatment
          </SustainButton></Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;
