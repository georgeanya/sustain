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
  cursor: "pointer",
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
        <p className=" pb-6 text-2xl leading-9 md:text-start md:text-4xl font-bold text-white">
          Let's help you treat multiple chronic metabolic diseases
        </p>
        <div className="flex mt-8 md:mt-11">
          <img src={type2.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base leading-5 md:text-3lg">
            Type 2 diabetes
          </span>
        </div>
        <div className="flex mt-6 md:mt-8">
          <img src={pret2.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base leading-5 md:text-3lg">
            Prediabetes
          </span>
        </div>
        <div className="flex mt-6 md:mt-8">
          <img src={dysli.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base leading-5 md:text-3lg">
            Dyslipidemia
          </span>
        </div>
        <div className="flex mt-8 md:mt-8 mb-6">
          <img src={hyper.src} alt="" />
          <span className="ml-4 flex self-center text-white text-base leading-5 md:text-3lg">
            Hypertension
          </span>
        </div>
      </div>
      <div className="md:max-w-lg md:pr-8">
        <p className="mt-7 md:mt-0 text-base leading-6 md:text-start md:text-1lg text-white">
          Our providers serve as dedicated metabolic disease specialists,
          complementing your role as the primary care doctor for your patients.
        </p>
        <p className="mt-7 md:mt-9 text-base leading-6 md:text-start md:text-1lg text-white">
          They monitor biomarkers, provide metabolic health counseling, and
          safely deprescribe medications when appropriate.
        </p>
        <p className="mt-7 md:mt-9 text-base leading-6 md:text-start md:text-1lg text-white">
          We understand the importance of collaboration and communication. Our
          providers keeps you informed of any changes to your patient's
          medication regimens, ensuring seamless coordination of care.
        </p>
        <div className="mt-10 md:mt-15 ">
          <Link href="https://forms.gle/RZ3DwhQ4wpSX3GAw5">
            <SustainButton className="text-xs lg:text-base font-medium">
              Refer patients here
            </SustainButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;
