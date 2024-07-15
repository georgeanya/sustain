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
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 36px",
  },
});

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-[#0C1227] md:px-32 px-5 md:pt-36 pt-24 text-center md:text-start text-white">
      <p className="mb-6 md:mb-5 text-base leading-5 md:text-xl md:leading-6">
        Start your enrollment now
      </p>
      <div className="md:flex md:justify-between">
        <p className="md:text-5lg text-3xl font-bold mb-11 md:max-w-2xl">
          Are you ready to start that journey? Join Custodia today!
        </p>
        <Link href="/start">
          <a>
            <SustainButton className="self-start text-xs md:text-base font-medium">
              Get started now
            </SustainButton>
          </a>
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
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/pricing">Pricing</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/healthcare-providers">For healthcare providers</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/research">Research</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/faq">FAQs</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/download">Download our app</Link>
            </a>
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              RESOURCES
            </h3>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/404">Help center</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                Privacy policy
              </Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
                Terms of use
              </Link>
            </a>
            {/* <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </a> */}
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              COMPANY
            </h3>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox.ng/">About</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/blog">Blog</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
                Careers
              </Link>
            </a>
            {/* <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </a> */}
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              CONTACT
            </h3>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="tel:+2347040559724">+2347040559724</Link>
            </a>
            <a className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="mailto:hi@custodiahealth.com">
                hi@custodiahealth.com
              </Link>
            </a>
            <div className="flex">
              <Link href="https://facebook.com/custodiahealth">
                <a>
                  <img
                    src={fbook.src}
                    className="mr-5 cursor-pointer"
                    alt="facebook logo"
                  />
                </a>
              </Link>
              <Link href="https://instagram.com/custodiahealth">
                <a>
                  <img
                    src={insta.src}
                    className="mr-5 cursor-pointer"
                    alt="instagram logo"
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/custodiahealth">
                <a>
                  <img
                    src={twitter.src}
                    className="mr-5 cursor-pointer"
                    alt="twitter logo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="md:mt-26 mt-16 text-sm pb-14 ">
        Custodia Health ©{currentYear} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
