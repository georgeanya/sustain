import React from "react";
import rectangle from "../public/assets/rectangle.png";
const Section3 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-12 pb-20 lg:pb-24">
      <p className="pt-12 lg:pt-16 text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
        Here’s what our treatment can do for you
      </p>
      <div className="lg:mt-6 flex flex-wrap justify-between">
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">Medication elimination</p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Address the root cause of condition and stop your dependency on
            medication, saving you money
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">Reduce blood sugar</p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your blood sugar to normal levels and prevents associated
            complications like kidney disease.
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">Reduce blood pressure</p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your blood pressure and prevent associated complications like
            stroke and heart disease
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">Weight loss</p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Lose weight, become more active, and get back to doing the things
            you love.
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">HbA1c reduction</p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your HbA1c level, a measure of how well controlled your blood
            sugar has been over a period of about 3 months
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">Improve ASCVD risk score</p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Reduce your triglyceride levels, and improve other cardiovascular
            disease risk factors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
