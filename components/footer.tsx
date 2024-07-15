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
          <a href=""><SustainButton className="self-start text-xs md:text-base font-medium">
            Get started now
          </SustainButton></a>
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
              <Link href="/pricing"><a>Pricing</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/healthcare-providers">
                <a>For healthcare providers</a>
              </Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/research"><a>Research</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/faq"><a>FAQs</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/download"><a>Download our app</a></Link>
            </p>
          </div>
          <div className="w-40 md:w-56">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base md:leading-5 font-medium">
              RESOURCES
            </h3>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/404"><a>Help center</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                <a>Privacy policy</a>
              </Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
                <a>Terms of use</a>
              </Link>
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
              <Link href="https://lifebox.ng/"><a>About</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="/blog"><a>Blog</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
                <a>Careers</a>
              </Link>
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
              <Link href="tel:+2347040559724"><a>+2347040559724</a></Link>
            </p>
            <p className="md:mb-6 md:text-sm text-sm leading-4 mb-6 text-[#C4CED4]">
              <Link href="mailto:hi@custodiahealth.com">
                <a href="">hi@custodiahealth.com</a>
              </Link>
            </p>
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
