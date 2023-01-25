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
    <div className="px-5 lg:px-32 pt-5 lg:pb-36 pb-24 ">
      <div className="lg:flex lg:flex-col lg:justify-center">
        <p className=" text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
          How much does it cost?
        </p>
        <p className="mt-5 md:mt-6 text-base  lg:text-start lg:text-xl md:max-w-xl text-[#476D85]">
        This price gives you access to Sustain and covers all medical care and more!
        </p>
      </div>
      <div className="mt-12 flex flex-wrap justify-between">
        <div className="sm:max-w-xs">
          <p className="text-base text-[#476D85]">Monthly membership</p>
          <p className=" font-semibold text-[#002A47] text-2xl mt-2.5 mb-10">₦4,000 <span className="text-lg">/ month</span></p>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Doctor supervision
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Personal health coach
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Personalized treatment plan
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Private community
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Resources, meal plan, and food guides
            </span>
          </div>
        </div>
        <div className="sm:max-w-xs">
          <p className="text-base text-[#476D85]">Bi-annual membership</p>
          <p className=" font-semibold text-[#002A47] text-2xl mt-2.5 mb-10">₦45,000 <span className="text-lg">/ 6 months</span></p>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Doctor supervision
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Personal health coach
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Personalized treatment plan
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Private community
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Resources, meal plan, and food guides
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Unlimited lab tests
            </span>
          </div>
        </div>
        <div className="sm:max-w-xs">
          <p className="text-base text-[#476D85]">Annual membership</p>
          <p className=" font-semibold text-[#002A47] text-2xl mt-2.5 mb-10">₦60,000 <span className="text-lg">/ year</span></p>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Doctor supervision
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Personal health coach
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Personalized treatment plan
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Private community
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Resources, meal plan, and food guides
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Unlimited lab tests
            </span>
          </div>
          <div className="flex mt-3">
            <img src={icon.src} className="self-center" alt="" />
            <span className="ml-3 text-[#476D85] flex self-center text-base">
            Discount on health supplies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
