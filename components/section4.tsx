import React from "react";
import rectangle from "../public/assets/rectangle.png";

const Section4 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-2.5 pt-2.5 lg:pb-36 pb-24 ">
      <p className=" text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
        You get all the support you need
      </p>
      <p className="mt-5 text-base  lg:text-start lg:text-lg text-[#476D85]">
        We equip you with tools to help you reverse your condition. When you
        join Sustain, you get your own
      </p>
      <div className="lg:mt-5 md:mt-6 flex flex-wrap justify-between">
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">
            Personal health coach
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get paired with a health coach that supports you every step of
            the way, answers your questions, helps your create an easy meal
            plan, and keeps you accountable.
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">
            Personal doctor
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get paired with a doctor that monitors you and manages your
            medications, including safely reducing or eliminating any
            medications you no longer need.
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">
            Online community
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get added to a peer group that allows you to share your
            experiences and challenges. Your peer group keeps you encouraged and
            accountable. You’ll never feel alone.
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">
            Personalized plan
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get a treatment plan personalized to your lifestyle, food
            preferences, and metabolic condition and this is continuously
            adjusted to meet your needs
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">
            Member app
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get tools to help you track your food, activity, weight, blood
            pressure, blood sugar and your outcomes. The more you know, the
            better.
          </p>
        </div>
        <div className="mt-12 sm:max-w-xs">
          <img src={rectangle.src} alt="" />
          <p className="text-xl lg:text-2 text-[#002A47] font-medium mt-5">
            Resource center
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get weekly engaging lessons to educate you and inspire you to
            make better choices. You also get access to 1,000+ low-carb recipes
            tailored to your dietary preferences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
