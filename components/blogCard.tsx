import React from "react";
import image from "../public/assets/image.svg";
import a1ctest from "../public/assets/aictest.svg";

const BlogCard = () => {
  return (
    <div className="max-w-[357px]">
      <img src={a1ctest.src} alt="" />
      <div className="mt-7">
        <p className=" text-sm text-[#476D85]">Research</p>
        <p className="text-[#002A47] font-bold text-llg md:text-1xl md:leading-8 mt-2.5 md:mt-3">
          What’s an A1C Test and Why Might You Need one?
        </p>
        <p className="text-[#476D85] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
          There are many reasons that understanding your blood glucose levels is
          beneficial — they are a key indicator of health, and they are
          especially useful in understanding your risk for prediabetes or type 2
          diabetes.
        </p>
        <div className="flex mt-7 md:mt-10">
          <img src={image.src} alt="" className="w-12" />
          <div className="ml-4 self-center">
            <p className="text-[#002A47] text-sm md:text-base md:leading-5 font-medium">
              Dr. Yetunde Wonda
            </p>
            <p className="text-[#476D85] text-xs">Clinical Ops</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
