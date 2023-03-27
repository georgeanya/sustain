import React from "react";
import { useState } from "react";
import icon from "../public/assets/icon.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Faq from "../components/faq";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "calc(100% - 100px)",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
    width: "calc(100% - 40px)",
  },
});

const Pricing = (props: any) => {
  const [time, setTime] = useState(false);

  function toggleTimeTrue() {
    setTime((time) => (time = true));
  }
  function toggleTimeFalse() {
    setTime((time) => (time = false));
  }
  const [time1, setTime1] = useState(false);

  function toggleTime1True() {
    setTime1((time1) => (time1 = true));
  }
  function toggleTime1False() {
    setTime1((time1) => (time1 = false));
  }
  return (
    <div>
      <Navbar />
      <div className="px-5 lg:px-66 md:pt-24 pt-16 pb-24 lg:pb-36 bg-[#F0F7FF]">
        <div className="flex justify-center">
          <h2 className="text-4lg text-center lg:text-5xl font-bold text-[#002A47] mb-12 md:mb-17 max-w-2xl">
            Choose a membership plan that’s right for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex justify-between flex-col md:max-w-md rounded-2xl bg-white py-10 lg:py-15">
            <div>
              {time1 ? (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    COMPREHENSIVE
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 120,000
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    COMPREHENSIVE
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 60,000
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB]  justify-self-center">
                  <div
                    className={
                      time1
                        ? "bg-white rounded-3xl w-1/2 py-2 cursor-pointer flex justify-center"
                        : "w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTime1True}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">6-Months</p>
                  </div>
                  <div
                    className={
                      time1
                        ? "w-1/2 py-2 flex cursor-pointer justify-center"
                        : "bg-white rounded-3xl w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTime1False}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">Annual</p>
                  </div>
                </div>
              </div>
              <div className="pt-11 lg:pt-14 px-5 lg:px-12">
                <div className="flex">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Doctor and health coach supervision
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Unlimited consultations
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Personalized treatment plan
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Resources, meal plan, and food guides
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Access to our mobile app
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Routine lab tests
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Unlimited health supplies
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-end">
              <div className="mt-10 lg:mt-12 flex justify-center">
                <Link href="/start">
                  <SustainButton className="text-sm  lg:text-base font-medium">
                    Get started
                  </SustainButton>
                </Link>
              </div>
              <p className="mt-5 md:mt-6 text-sm lg:text-bases md:px-12 text-center text-[#002A47]">
                You can pay in 3 installments.
                <br />
                Powered by Arteri
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between md:max-w-md rounded-2xl bg-white py-10 lg:py-15">
            <div>
              {time ? (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    BASIC
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 35,000
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-medium text-center md:text-sm leading-4 text-[#002A47]">
                    BASIC
                  </p>
                  <p className="mt-2 md:mt-1.5 mb-6 text-1xxl lg:text-4lg font-medium text-center text-[#002A47]">
                    NGN 60,000
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB] justify-self-center">
                  <div
                    className={
                      time
                        ? "bg-white rounded-3xl w-1/2 py-2 cursor-pointer flex justify-center"
                        : "w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTimeTrue}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">6-Months</p>
                  </div>
                  <div
                    className={
                      time
                        ? "w-1/2 py-2 flex cursor-pointer justify-center"
                        : "bg-white rounded-3xl w-1/2 py-2 flex cursor-pointer justify-center"
                    }
                    onClick={toggleTimeFalse}
                  >
                    <p className="text-sm leading-4 text-[#002A47]">Annual</p>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-5 pt-11 lg:pt-14">
                <div className="flex">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Doctor and health coach supervision
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Unlimited consultations
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Personalized treatment plan
                  </span>
                </div>
                <div className="flex mt-5">
                  <img
                    src={icon.src}
                    className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                    alt=""
                  />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Resources, meal plan, and food guides
                  </span>
                </div>
                <div className="flex mt-5">
                  <img src={icon.src} className="self-center w-2.5 md:w-3" alt="" />
                  <span className="ml-3 md:ml-4 flex self-center text-base leading-5 md:text-lg md:leading-6 text-[#002A47]">
                    Access to our mobile app
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-10 lg:mt-12 flex justify-center">
                <Link href="/start">
                  <SustainButton className="text-sm  lg:text-base font-medium">
                    Get started
                  </SustainButton>
                </Link>
              </div>
              <p className="mt-5 md:mt-6 text-sm lg:text-bases md:px-12 text-center text-[#002A47]">
                You can pay in 3 installments.
                <br />
                Powered by Arteri
              </p>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Pricing;
