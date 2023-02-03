import React from "react";
import { useState } from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";
import labs from "../public/assets/labs.png";

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
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#EFF2FA] flex justify-between">
      <div>
        <p className=" text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
          Get all the support you need
        </p>
        <p className="mt-5 md:mt-6 md:mb-12 text-base  lg:text-start lg:text-xl md:max-w-xl text-[#002A47]">
          We give you the tools and support you need to reverse your condition
          and take control of your health.
        </p>
        <div className="flex justify-between">
          <div className="max-w-3xl">
            <div className="flex" id="0">
              <div className="self-start min-w-fit" onClick={toggle}>
                {expand ? (
                  <img
                    className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-3.5"
                    src={minus.src}
                    alt=""
                  />
                ) : (
                  <img
                    className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1"
                    src={plus.src}
                    alt=""
                  />
                )}
              </div>
              <div className="self-center">
                <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
                  What is Sustain?
                </p>
                {expand ? (
                  <p className="text-base lg:text-xl text-[#476D85] mt-2 lg:my-6">
                    Exercise is not required for success on Sustain. We
                    encourage you to choose whatever level of physical activity
                    you desire.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr className="my-6 lg:my-8" />
            <div className=" flex" id="1">
              <div className="self-start min-w-fit" onClick={toggle1}>
                {expand1 ? (
                  <img
                    className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-3.5"
                    src={minus.src}
                    alt=""
                  />
                ) : (
                  <img
                    className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1"
                    src={plus.src}
                    alt=""
                  />
                )}
              </div>
              <div className="self-center">
                <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
                  Who is Sustain for?
                </p>
              </div>
            </div>
            <hr className="my-6 lg:my-8" />
            <div className="flex" id="2">
              <div className="self-start min-w-fit" onClick={toggle2}>
                {expand2 ? (
                  <img
                    className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-3.5"
                    src={minus.src}
                    alt=""
                  />
                ) : (
                  <img
                    className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1"
                    src={plus.src}
                    alt=""
                  />
                )}
              </div>
              <div className="self-center">
                <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
                  Are medications included in the treatment?
                </p>
              </div>
            </div>
            <hr className="my-6 lg:my-8" />
            <div className=" flex" id="3">
              <div className="self-start min-w-fit" onClick={toggle3}>
                {expand3 ? (
                  <img
                    className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-3.5"
                    src={minus.src}
                    alt=""
                  />
                ) : (
                  <img
                    className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1"
                    src={plus.src}
                    alt=""
                  />
                )}
              </div>
              <div className="self-center">
                <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
                  Is Sustain free?
                </p>
              </div>
            </div>
            <hr className="my-6 lg:my-8" />
            <div className=" flex" id="4">
              <div className="self-start min-w-fit" onClick={toggle4}>
                {expand4 ? (
                  <img
                    className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-3.5"
                    src={minus.src}
                    alt=""
                  />
                ) : (
                  <img
                    className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1"
                    src={plus.src}
                    alt=""
                  />
                )}
              </div>
              <div className="self-center">
                <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
                  Is exercise required?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-lg">
        <img src={labs.src} alt="" />
      </div>
    </div>
  );
};

export default Section4;
