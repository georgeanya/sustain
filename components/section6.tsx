import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import icon from "../public/assets/icon.png";

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

const Section6 = (props: any) => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#EFF2FA] lg:flex justify-between">
      <div className="">
        <p className=" text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
          How much does it cost?
        </p>
        <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl md:max-w-xl text-[#002A47]">
          This price covers the cost of treatment excluding lab tests. Some
          health insurers cover the cost of Sustain for their members. Request
          for a free consultation to learn more.
        </p>
        <div className="mt-8 lg:mt-14 ">
          <SustainButton className="text-xs lg:text-base font-medium">
            Schedule your free consult
          </SustainButton>
        </div>
      </div>
      <div className="flex justify-center flex-col max-w-lg">
        <div className="flex justify-center">
          <div className="flex w-56 rounded-3xl p-1.5 bg-white mt-18 mb-10 lg:my-0 justify-self-center">
            <div
              className={
                props.time
                  ? "bg-[#DFEDFB] rounded-3xl w-1/2 p-1 cursor-pointer flex justify-center"
                  : "w-1/2 p-1 flex cursor-pointer justify-center"
              }
              onClick={props.toggleTrue}
            >
              <p>6-Months</p>
            </div>
            <div
              className={
                props.time
                  ? "w-1/2 p-1 flex cursor-pointer justify-center"
                  : "bg-[#DFEDFB] rounded-3xl w-1/2 p-1 flex cursor-pointer justify-center"
              }
              onClick={props.toggleFalse}
            >
              <p>Annual</p>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl bg-white px-5 py-8 lg:p-12">
          {props.time ? (
            <div>
              <p className="text-xs font-medium">6-Month Plan</p>
              <p className="my-3 text-2xl font-medium">NGN 35,000</p>
            </div>
          ) : (
            <div>
              <p className="text-xs font-medium">1-Year Plan</p>
              <p className="my-3 text-2xl font-medium">NGN 60,000</p>
            </div>
          )}

          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 flex self-center text-base lg:text-xl">
              Unlimited consultations
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 flex self-center text-base lg:text-xl">
              Personalized treatment plan
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 flex self-center text-base lg:text-xl">
              Discounted lab tests
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 flex self-center text-base lg:text-xl">
              Resources, meal plan, and food guides
            </span>
          </div>
        </div>
        <p className="mt-5 md:mt-6 text-base md:px-12 text-center lg:text-xl">
          Concerned about the cost? You can get care now and pay later
        </p>
      </div>
    </div>
  );
};

export default Section6;
