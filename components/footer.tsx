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
    padding: "16px 36px",
  },
});

const Footer = () => {
  return (
    <div className="bg-[#0C1227] md:px-32 px-5 md:pt-36 pt-24 text-center md:text-start text-white">
      <p className="mb-5 md:text-xl">Schedule your consultation now</p>
      <div className="md:flex md:justify-between">
        <p className="md:text-5lg text-3xl font-bold mb-11 md:max-w-2xl">
          Are you ready to start that journey? Join Custodia today!
        </p>
        <SustainButton className="self-start text-xs md:text-base font-medium">
          Request your free consult
        </SustainButton>
      </div>
      <hr className="md:mt-36 mt-28 md:mb-24 mb-20" />
      <div className="md:flex md:justify-between">
        <img src={sustain.src} className="self-start" alt="sustain logo" />
        <div className="flex flex-wrap text-start justify-between">
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium">
              PRODUCT
            </h3>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/pricing">Pricing</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/">Health plan</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/research">Research</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/">Patient stories</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/download">Download our app</Link>
            </p>
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium">
              RESOURCES
            </h3>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/404">Help center</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/privacy-policy">Privacy policy</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/terms-of-use">Terms of use</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </p>
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium">
              COMPANY
            </h3>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/">About</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/">Blog</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/404">Careers</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </p>
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium">
              CONTACT
            </h3>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="">+2349040559724</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm mb-6 text-[#C4CED4]">
              <Link href="mailto:hi@custodiahealth.com">
                hi@custodiahealth.com
              </Link>
            </p>
            <div className="flex">
              <Link href="https://facebook.com/custodiahealth"><img src={fbook.src} className="mr-5" alt="facebook logo" /></Link>
              <Link href="https://instagram.com/custodiahealth"><img src={insta.src} className="mr-5" alt="instagram logo" /></Link>
              <Link href="https://twitter.com/custodiahealth"><img src={twitter.src} className="mr-5" alt="twitter logo" /></Link>
            </div>
          </div>
        </div>
      </div>
      <p className="md:mt-26 mt-16 text-sm pb-14 ">
        Custodia Health © 2023 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
