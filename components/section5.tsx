import React from "react";
import image from "../public/assets/image.png";
import left from "../public/assets/left.png";
import right from "../public/assets/right.png";
import video from "../public/assets/video.png";
import playicon from "../public/assets/playicon.png";

const Section5 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24">
      <p className="pr-8 text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
        Don’t just take our word for it
      </p>
      <p className="mt-5 md:mt-6 text-lg  lg:text-start mb-12 lg:text-xl md:max-w-xl text-[#002A47]">
        See what some of our patients say about us.
      </p>
      <div className="relative">
        <img src={video.src} className="relative" alt="" />
        {/* <img src={playicon.src} className="absolute" alt="" /> */}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-7">
        <div className="mt-12 p-6 lg:px-12 lg:py-14 rounded-2xl bg-[#EFF2FA]">
          <p className="text-lg lg:text-2xl lg:leading-9 text-[#002A47] ">
            “Custodia has changed my life. I feel better, weigh less, and have
            control my blood sugar well. I am excited about continuing to make
            better choices about my health so I can be there for my family.”
          </p>
          <div className="pt-10 flex ">
            <img src={image.src} alt="" width="60px" />
            <div className="self-center pl-3">
              <p className="font-medium text-base text-[#002A47]">
                Ezeogo Mang
              </p>
              <p className="text-sm text-[#476D85]">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="mt-12 p-6 lg:px-12 lg:py-14 rounded-2xl bg-[#EFF2FA]">
            <p className="text-lg lg:text-2xl lg:leading-9 text-[#002A47] ">
              “I’ve found a new side to me that I didn’t realize was buried
              under all the weight and the bad health. Before Custodia, I didn’t
              think my diabetes was reversible. Custodia has given me my life
              back.”
            </p>
            <div className="pt-10 flex ">
              <img src={image.src} alt="" width="60px" />
              <div className="self-center pl-3">
                <p className="font-medium text-base text-[#002A47]">Uwa Uye</p>
                <p className="text-sm text-[#476D85]">
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <p className="self-center text-sm text-[#002A47] lg:hidden">1 OF 6</p>
        <p className="self-center text-[#002A47] text-sm hidden lg:flex">
          2 0F 6
        </p>
        <img src={left.src} className="ml-8" alt="" />
        <img src={right.src} className="ml-4" alt="" />
      </div>
      <div className="flex flex-wrap justify-between mt-24">
        <div className="w-60">
          <p className="font-medium text-4xl text-[#4F9EEA]">95%</p>
          <p className="text-base font-normal text-[#002A47] mt-3">
            of patients reduced or eliminated their medications
          </p>
        </div>
        <div className="w-60">
          <p className="font-medium text-4xl text-[#4F9EEA]">2.3%</p>
          <p className="text-base font-normal text-[#002A47] mt-3">
            Average HbA1c reduction among 90% patients
          </p>
        </div>
        <div className="w-60">
          <p className="font-medium text-4xl text-[#4F9EEA]">65%</p>
          <p className="text-base font-normal text-[#002A47] mt-3">
            of patients acheive normal blood pressure after 6 months
          </p>
        </div>
        <div className="w-60">
          <p className="font-medium text-4xl text-[#4F9EEA]">15%</p>
          <p className="text-base font-normal text-[#002A47] mt-3">
            Average weight loss after 6 months
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
