import React from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import app from "../public/assets/app.png";
import apple from "../public/assets/apple.png";
import play from "../public/assets/play.png";

const Download = () => {
  return (
    <div>
      <Navbar1 />
      <div className="px-5 lg:px-32 lg:flex lg:justify-between">
        <div className="lg:max-w-lg lg:mt-32">
          <h2 className="pt-12 text-4lg md:text-center lg:text-start lg:text-5xl font-bold text-[#002A47]">
            Download Custodia for iOS and Android
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-center lg:text-start lg:text-xl text-[#476D85]">
            Download our app to begin your journey towards lasting health
          </p>
          <div className="flex md:justify-center lg:justify-start mt-7">
            <img src={play.src} className="mr-3 lg:mr-4" alt="" />
            <img src={apple.src} alt="" />
          </div>
        </div>
        <div className="my-20 lg:w-1/2 lg:mt-20 lg:mb-36 flex justify-center">
          <img src={app.src} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Download;
