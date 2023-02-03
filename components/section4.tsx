import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";
import support from "../public/assets/support.png";

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

const Section4 = () => {
  const [expand, setExpand] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);

  function toggle() {
    setExpand((prevExpand) => !prevExpand);
  }
  function toggle1() {
    setExpand1((prevExpand1) => !prevExpand1);
  }
  function toggle2() {
    setExpand2((prevExpand2) => !prevExpand2);
  }
  function toggle3() {
    setExpand3((prevExpand3) => !prevExpand3);
  }
  function toggle4() {
    setExpand4((prevExpand4) => !prevExpand4);
  }
  function toggle5() {
    setExpand((prevExpand5) => !prevExpand5);
  }

  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#EFF2FA] lg:flex justify-between">
      <div className="max-w-l">
        <p className=" text-3xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
          Get all the support you need
        </p>
        <p className="mt-5 md:mt-6 mb-16 md:mb-12 text-base  lg:text-start lg:text-xl md:max-w-xl text-[#002A47]">
          We give you the tools and support you need to reverse your condition
          and take control of your health.
        </p>
        <div className="max-w-xl min-w-full">
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-[#002A47] font-medium">
                  A lifestyle medicine doctor
                </p>
                <div className="flex" onClick={toggle}>
                  {expand ? (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-3.5"
                      src={minus.src}
                      alt=""
                    />
                  ) : (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-1"
                      src={plus.src}
                      alt=""
                    />
                  )}
                </div>
              </div>
              {expand ? (
                <p className="text-base lg:text-xl text-[#476D85] mt-2 lg:my-6">
                  You’ll get paired with a doctor who will consult with you,
                  monitor your biomarkers, and manages your medications,
                  including safely reducing or eliminating any medications you
                  no longer need
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr className="my-6 lg:my-8" />
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-[#002A47] font-medium">
                  A personal health coach
                </p>
                <div className="flex" onClick={toggle1}>
                  {expand1 ? (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-3.5"
                      src={minus.src}
                      alt=""
                    />
                  ) : (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-1"
                      src={plus.src}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 lg:my-8" />
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-[#002A47] font-medium">
                  A personalized treatment plan
                </p>
                <div className="flex" onClick={toggle2}>
                  {expand2 ? (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-3.5"
                      src={minus.src}
                      alt=""
                    />
                  ) : (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-1"
                      src={plus.src}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 lg:my-8" />
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-[#002A47] font-medium">
                  Exclusive resources
                </p>
                <div className="flex" onClick={toggle3}>
                  {expand3 ? (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-3.5"
                      src={minus.src}
                      alt=""
                    />
                  ) : (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-1"
                      src={plus.src}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 lg:my-8" />
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-[#002A47] font-medium">
                  A private patient community
                </p>
                <div className="flex" onClick={toggle4}>
                  {expand4 ? (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-3.5"
                      src={minus.src}
                      alt=""
                    />
                  ) : (
                    <img
                      className="flex self-center w-4 lg:w-5 mt-1"
                      src={plus.src}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
            <hr className="my-6 lg:my-8" />
            <div className="mt-2 lg:mt-16 ">
              <SustainButton className="text-xs lg:text-base font-medium">
                Book a consultation now
              </SustainButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-lg mt-17">
        <img src={support.src} alt="" className="w-11/12" />
      </div>
    </div>
  );
};

export default Section4;
