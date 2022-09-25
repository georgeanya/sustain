import React from "react";
import iphone from "../public/assets/iphone.png";

const Section4 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#EFF2FA]">
      <p className=" text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
        Here’s what our treatment can do for you
      </p>
      <p className="mt-5 md:mt-6 md:mb-12 text-base  lg:text-start lg:text-xl md:max-w-xl text-[#002A47]">
        We equip you with the tools you need to reverse your condition and take
        control of your health.
      </p>
      <div className="lg:mt-5 md:mt-6 md:grid md:grid-cols-2 md:gap-7 md:grid-rows-2">
        <div className="mt-12 md:mt-0 lg:pt-16 lg:px-12 rounded-2xl bg-white pt-11 px-6">
          <p className="text-xl lg:text-2 text-[#002A47] font-medium">
            Personal doctor
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Your health coach supports you every step of the way, answers your
            questions, helps your create an easy meal plan, and keeps you
            accountable.
          </p>
          <div className="flex justify-center mt-12">
            <img src={iphone.src} alt="" />
          </div>
        </div>
        <div className="mt-12 md:mt-0 lg:pt-16 lg:px-12 rounded-2xl bg-white pt-11 px-6">
          <p className="text-xl lg:text-2 text-[#002A47] font-medium">
            Personal health coach
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            Your health coach supports you every step of the way, answers your
            questions, helps your create an easy meal plan, and keeps you
            accountable.
          </p>
          <div className="flex justify-center mt-12">
            <img src={iphone.src} alt="" />
          </div>
        </div>
        <div className="mt-12 md:mt-0 lg:pt-16 lg:px-12 rounded-2xl bg-white pt-11 px-6">
          <p className="text-xl lg:text-2 text-[#002A47] font-medium">
            Exclusive resources
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get meal plans, and low-carb recipes tailored to your dietary
            preferences. You also get engaging lessons to educate you and
            inspire you to make better choices.
          </p>
          <div className="flex justify-center mt-12">
            <img src={iphone.src} alt="" />
          </div>
        </div>
        <div className="mt-12 md:mt-0 lg:pt-16 lg:px-12 rounded-2xl bg-white pt-11 px-6">
          <p className="text-xl lg:text-2 text-[#002A47] font-medium">
            Online community
          </p>
          <p className="text-base lg:text-lg text-[#476D85] mt-2">
            You get your own private peer group where you can share your
            experiences and challenges. Your peer group keeps you encouraged and
            accountable. You’ll never feel alone.
          </p>
          <div className="flex justify-center mt-12">
            <img src={iphone.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
