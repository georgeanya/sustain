import React from "react";
import Navbar from "./navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

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
    <div>
      <p className=" leading-tight  md:text-3xl text-1xl md:text-start font-bold text-[#002A47] ">
      You have submitted your details successfully
      </p>
      <p className="mt-5 text-base leading-[23px] md:leading-[27px] md:text-lg font-normal md:text-start text-[#476D85] mb-[30px]">
      A WhatsApp message will be sent to you to complete your enrollment into Custodia Health.
      </p>
      <Link href="https://t.me/+RCQ20EcSxeBmMDI0">
        <SustainButton
          className="self-center text-sm md:text-base font-medium"
          type="submit"
        >
          Join our Telegram community
        </SustainButton>
      </Link>
    </div>
  );
};

export default StartSuccess;
