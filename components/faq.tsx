import React from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";

const Faq = () => {
  return (
    <div className="px-5 lg:px-32 lg:py-12 pb-20 lg:pb-24">
      <p className="pt-12 lg:pt-16 text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47] mb-14 pr-8">
        Frequently asked questions
      </p>
      <div className="max-w-3xl">
        <div className="flex">
          <div className="self-start min-w-fit mt-2.5">
            <img
              className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-1"
              src={minus.src}
              alt=""
            />
          </div>
          <div className="self-center">
            <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
              What is Sustain?
            </p>
            <p className="text-base lg:text-xl text-[#476D85] mt-2 lg:my-6">
              Exercise is not required for success on Sustain. We encourage you
              to choose whatever level of physical activity you desire.
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className=" flex">
          <div className="flex self-start min-w-fit">
            <img className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1" src={plus.src} alt="" />
          </div>
          <div className="self-center">
            <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
              Who is Sustain for?
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className="flex">
          <div className="flex self-start min-w-fit ">
            <img className="self-center mr-6 w-4 lg:w-5 lg:mr-10 mt-1" src={plus.src} alt="" />
          </div>
          <div className="self-center">
            <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
              Are medications included in the treatment?
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className=" flex">
          <div className="flex self-start min-w-fit">
            <img className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1" src={plus.src} alt="" />
          </div>
          <div className="self-center">
            <p className="self-center text-lg lg:text-2xl text-[#002A47] font-medium">
              Is Sustain free?
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <div className=" flex">
          <div className="flex self-start min-w-fit">
            <img className="self-center mr-6 w-4 lg:w-5 lg:mr-10 mt-1" src={plus.src} alt="" />
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
