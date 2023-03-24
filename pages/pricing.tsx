import React from "react";
import icon from "../public/assets/icon.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Faq from "../components/faq";
import Navbar from "../components/navbar";

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
  return (
    <div>
      <Navbar />
      <div className="px-5 lg:px-66 pt-18 lg:pt-20 pb-32 bg-[#F0F7FF]">
        <div className="flex justify-center">
          <h2 className="text-4lg text-center lg:text-5xl font-bold text-[#002A47] mb-17 max-w-2xl">
            Choose a membership plan that’s right for you
          </h2>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex justify-between flex-col md:max-w-md rounded-2xl bg-white py-10 lg:py-15 ">
            <div>
              {props.time ? (
                <div>
                  <p className="text-xs font-medium text-center">
                    6-Month Plan
                  </p>
                  <p className="my-1.5 text-2xl font-medium text-center">
                    NGN 35,000
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-medium text-center">1-Year Plan</p>
                  <p className="my-1.5 text-2xl font-medium text-center">
                    NGN 60,000
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB] my-4  justify-self-center">
                  <div
                    className={
                      props.time
                        ? "bg-white rounded-3xl w-1/2 p-1 cursor-pointer flex justify-center"
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
                        : "bg-white rounded-3xl w-1/2 p-1 flex cursor-pointer justify-center"
                    }
                    onClick={props.toggleFalse}
                  >
                    <p>Annual</p>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 py-10 px-5">
                <div className="flex">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Doctor and health coach supervision
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Unlimited consultations
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Personalized treatment plan
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Resources, meal plan, and food guides
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Access to our mobile app
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-end">
              <div className="mt-8 lg:mt-16 flex justify-center">
                <SustainButton className="text-xs lg:text-base font-medium">
                  Get started
                </SustainButton>
              </div>
              <p className="mt-5 md:mt-6 text-base md:px-12 text-center">
                You can pay in 3 installments.
                <br />
                Powered by Arteri
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col md:max-w-md rounded-2xl bg-white py-10 lg:py-15 mt-8 sm:mt-0">
            <div>
              {props.time ? (
                <div>
                  <p className="text-xs font-medium text-center">
                    6-Month Plan
                  </p>
                  <p className="my-1.5 text-2xl font-medium text-center">
                    NGN 35,000
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-xs font-medium text-center">1-Year Plan</p>
                  <p className="my-1.5 text-2xl font-medium text-center">
                    NGN 60,000
                  </p>
                </div>
              )}
              <div className="flex justify-center">
                <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB] my-4  justify-self-center">
                  <div
                    className={
                      props.time
                        ? "bg-white rounded-3xl w-1/2 p-1 cursor-pointer flex justify-center"
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
                        : "bg-white rounded-3xl w-1/2 p-1 flex cursor-pointer justify-center"
                    }
                    onClick={props.toggleFalse}
                  >
                    <p>Annual</p>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 py-10 px-5">
                <div className="flex">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Doctor and health coach supervision
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Unlimited consultations
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Personalized treatment plan
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Resources, meal plan, and food guides
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Access to our mobile app
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Unlimited lab tests
                  </span>
                </div>
                <div className="flex mt-3">
                  <img src={icon.src} className="self-center" alt="" />
                  <span className="ml-3 flex self-center text-base lg:text-lg">
                    Discounted health supplies
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 flex justify-center">
              <SustainButton className="text-xs lg:text-base font-medium">
                Get started
              </SustainButton>
            </div>
            <p className="mt-5 md:mt-6 text-base md:px-12 text-center">
              You can pay in 3 installments.
              <br />
              Powered by Arteri
            </p>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Pricing;
