import React from "react";
import Navbar from "./navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import icon from "../public/assets/custodia-icon.svg";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%  ",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

const StartSuccess = () => {
  return (
    <div className="mt-[130px] md:mt-[165px]">
      <div className="flex justify-center">
        <img src={icon.src} alt="" className="w-[60px] md:w-[70px]" />
      </div>
      <h1 className="mt-5 leading-tight  md:text-3xl text-1xl text-center font-bold text-[#002A47] ">
        You have submitted your details successfully
      </h1>
      <p className="mt-[15px] text-base leading-[23px] md:leading-[27px] md:text-lg font-normal text-center text-[#476D85] mb-[30px]">
        A WhatsApp message will be sent to you to complete your enrollment into
        Custodia Health.
      </p>
      <Link href="https://chat.whatsapp.com/FRbf5Bs3IgE77YDfbZUV1U">
        <a>
          <SustainButton
            className="self-center text-sm md:text-base font-medium"
            type="submit"
          >
            Join our WhatsApp community
          </SustainButton>
        </a>
      </Link>
    </div>
  );
};

export default StartSuccess;
