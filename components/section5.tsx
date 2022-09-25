import React from "react";
import image from "../public/assets/image.png";
import left from "../public/assets/left.png";
import right from "../public/assets/right.png";

const Section5 = () => {
  return (
    <div className="px-5 lg:px-32 lg:py-12 pb-20 lg:pb-24">
      <p className="pt-12 pr-8 lg:pt-16 text-2xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-[#002A47]">
        Don’t just take our word for it
      </p>
      <p className="mt-6 text-lg  lg:text-start lg:text-xl md:max-w-xl text-[#002A47]">
        See what some of our patients say about us
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-7">
        <div className="mt-12 p-6 lg:px-10 lg:py-14 rounded-2xl bg-[#EFF2FA]">
          <p className="text-lg lg:text-2xl text-[#002A47] ">
            “Sustain has changed my life. I feel better, weigh less, and have
            control my blood sugar well. I am excited about continuing to make
            better choices about my health so I can be there for my family.”
          </p>
          <div className="pt-8 flex ">
            <img src={image.src} alt="" />
            <div className="self-center pl-3">
              <p className="font-medium text-base text-[#002A47]">
                Ezeogo Mang
              </p>
              <p className="text-sm text-[#476D85]">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="mt-12 p-6 lg:px-10 lg:py-14 rounded-2xl bg-[#EFF2FA]">
            <p className="text-lg lg:text-2xl text-[#002A47] ">
              “I’ve found a new side to me that I didn’t realize was buried
              under all the weight and the bad health. Before Sustain, I didn’t
              think my diabetes was reversible. Sustain has given me my life
              back.”
            </p>
            <div className="pt-8 flex ">
              <img src={image.src} alt="" />
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
    </div>
  );
};

export default Section5;
