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
      <p className="mb-6 md:mb-5 text-base leading-5 md:text-xl md:leading-6">Schedule your consultation now</p>
      <div className="md:flex md:justify-between">
        <p className="md:text-5lg text-3xl font-bold mb-11 md:max-w-2xl">
          Are you ready to start that journey? Join Custodia today!
        </p>
        <Link href="/start">
          <SustainButton className="self-start text-xs md:text-base font-medium">
            Book a consultation
          </SustainButton>
        </Link>
      </div>
      <hr className="md:mt-36 mt-28 md:mb-24 mb-20" />
      <div className="md:flex md:justify-between">
        <img src={sustain.src} className="self-start" alt="sustain logo" />
        <div className="flex flex-wrap text-start justify-between">
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              PRODUCT
            </h3>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/pricing">Pricing</Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/pricing">Health plan</Link>
            </p> */}
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/research">Research</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/faq">FAQs</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/download">Download our app</Link>
            </p>
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              RESOURCES
            </h3>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/404">Help center</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/privacy-policy">Privacy policy</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/terms-of-use">Terms of use</Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </p> */}
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              COMPANY
            </h3>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox.ng/">About</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://medium.com/@custodiahealth">Blog</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">Careers</Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </p> */}
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              CONTACT
            </h3>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="tel:+2349040559724">+2349040559724</Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="mailto:hi@custodiahealth.com">
                hi@custodiahealth.com
              </Link>
            </p>
            <div className="flex">
              <Link href="https://facebook.com/custodiahealth">
                <img src={fbook.src} className="mr-5" alt="facebook logo" />
              </Link>
              <Link href="https://instagram.com/custodiahealth">
                <img src={insta.src} className="mr-5" alt="instagram logo" />
              </Link>
              <Link href="https://twitter.com/custodiahealth">
                <img src={twitter.src} className="mr-5" alt="twitter logo" />
              </Link>
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
