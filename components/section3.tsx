import React from "react";
import hypert from "../public/assets/hypert.svg";
import blood from "../public/assets/blood.svg";
import lipids from "../public/assets/lipids.svg";
import weight from "../public/assets/weight.svg";
import hda1d from "../public/assets/hba1c.svg";
import pill from "../public/assets/pill.svg";

const Section3 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 " id="benefits">
      <p className=" text-3xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47] md:pr-6">
        Here’s what our treatment can do for you
      </p>
      <div className="lg:mt-5 md:mt-6 flex flex-wrap justify-between">
        <div className="mt-17 sm:max-w-s">
          <img src={pill.src} alt="" />
          <p className="text-xl lg:text-2xlxl text-[#002A47] font-medium mt-5">
            Medication elimination
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Address the root cause of condition and stop your dependency on
            medication, saving you money
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={blood.src} alt="" />
          <p className="text-xl lg:text-2xl text-[#002A47] font-medium mt-5">
            Blood sugar reduction
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your blood sugar to normal levels and prevents associated
            complications like kidney disease.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={hypert.src} alt="" />
          <p className="text-xl lg:text-2xl text-[#002A47] font-medium mt-5">
            Blood pressure reduction
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your blood pressure and prevent associated complications like
            stroke and heart disease
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={weight.src} alt="" />
          <p className="text-xl lg:text-2xl text-[#002A47] font-medium mt-5">
            Weight loss
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Lose weight as a side benefit, become more active, and get back to
            doing the things you love.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={hda1d.src} alt="" />
          <p className="text-xl lg:text-2xl text-[#002A47] font-medium mt-5">
            HbA1c reduction
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your HbA1c level, a measure of how well controlled your blood
            sugar has been over a period of 3 months
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={lipids.src} alt="" />
          <p className="text-xl lg:text-2xl text-[#002A47] font-medium mt-5">
            Improved lipid profile
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your triglyceride levels, improve your cholesterol profile
            and other cardiovascular disease risk factors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
