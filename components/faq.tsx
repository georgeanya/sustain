import React from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";

import { useState } from "react";

const Faq = () => {
  const [expand, setExpand] = useState(false);

  //   const [expand1, setExpand1] = useState(false);
  //   const [expand2, setExpand2] = useState(false);
  //   const [expand3, setExpand3] = useState(false);
  //   const [expand4, setExpand4] = useState(false);
  //     const [expand5, setExpand5] = useState(false);

  function toggle() {
    setExpand((prevExpand) => !prevExpand);
  }
  return (
    <div className="px-5 lg:px-32 lg:py-12 pb-20 lg:pb-24">
      <p className="pt-12 lg:pt-16 text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47] mb-14 pr-8">
        Frequently asked questions
      </p>
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
                Exercise is not required for success on Sustain. We encourage
                you to choose whatever level of physical activity you desire.
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className=" flex" id="1">
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
              Who is Sustain for?
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className="flex" id="2">
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
              Are medications included in the treatment?
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className=" flex" id="3">
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
              Is Sustain free?
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className=" flex" id="4">
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
              Is exercise required?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
