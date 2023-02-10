import React from "react";
import icon from "../public/assets/icon.png";

const Pricing = (props: any) => {
  return (
    <div className="px-5 lg:px-72 pt-18 lg:pt-20 pb-32 bg-[#F0F7FF]">
      <h2 className="text-3xl text-center lg:text-5xl font-bold text-[#002A47]">
        Choose a membership plan that’s right for you
      </h2>
      <div className="flex justify-between">
        <div className="flex justify-center flex-col max-w-lg rounded-2xl bg-white py-10 lg:py-15">
          {props.time ? (
            <div>
              <p className="text-xs font-medium text-center">6-Month Plan</p>
              <p className="my-3 text-2xl font-medium text-center">NGN 35,000</p>
            </div>
          ) : (
            <div>
              <p className="text-xs font-medium text-center">1-Year Plan</p>
              <p className="my-3 text-2xl font-medium text-center">NGN 60,000</p>
            </div>
          )}
          <div className="flex justify-center">
            <div className="flex w-56 rounded-3xl p-1 bg-[#DFEDFB] my-8 lg:mb-8 justify-self-center">
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
          <div className="px-5 py-8 lg:p-12">
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
    </div>
  );
};

export default Pricing;
