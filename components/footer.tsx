import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import twitter from "../public/assets/tw.svg";
import sustain from "../public/assets/custodiaw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

const Footer = () => {
  return (
    <div className="bg-[#0C1227] lg:px-32 px-5 lg:pt-36 pt-24 text-center lg:text-start text-white">
      <p className="mb-5 lg:text-xl">Schedule your consultation now</p>
      <div className="lg:flex lg:justify-between">
        <p className="lg:text-4xl text-3xl font-bold mb-11 lg:max-w-2xl">
          Are you ready to start that journey? Join Custodia today!
        </p>
        <SustainButton className="self-start text-xs lg:text-base font-medium">
          Request your free consult
        </SustainButton>
      </div>
      <hr className="lg:mt-36 mt-28 lg:mb-24 mb-20" />
      <div className="lg:flex lg:justify-between">
        <img src={sustain.src} className="self-start" alt="sustain logo" />
        <div className="flex flex-wrap text-start justify-between">
          <div className="w-32 lg:w-56">
            <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium">
              PRODUCT
            </h3>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/pricing">Pricing</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/">Health plan</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/research">Research</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/">Patient stories</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/download">Download our app</Link>
            </p>
          </div>
          <div className="w-32 lg:w-56">
            <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium">
              RESOURCES
            </h3>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/404">Help center</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/policy">Privacy policy</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/terms">Terms of use</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </p>
          </div>
          <div className="w-32 lg:w-56">
            <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium">
              COMPANY
            </h3>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/">About</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/">Blog</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/404">Careers</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </p>
          </div>
          <div className="w-32 lg:w-56">
            <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium">
              CONTACT
            </h3>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="">+2349040559724</Link>
            </p>
            <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-[#C4CED4]">
              <Link href="mailto:hi@custodiahealth.com">hi@custodiahealth.com</Link>
            </p>
            <div className="flex">
              <img src={fbook.src} className="mr-5" alt="facebook logo" />
              <img src={insta.src} className="mr-5" alt="instagram logo" />
              <img src={twitter.src} className="mr-5" alt="twitter logo" />
            </div>
          </div>
        </div>
      </div>
      <p className="lg:mt-32 mt-16 text-sm pb-16 ">
      Custodia Health © 2023 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
