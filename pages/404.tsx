import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

const ErrorPage = () => {
  return (
    <div className="px-5 lg:px-32 md:max-w-md lg:max-w-3xl py-12 lg:py-32">
      <p className="text-3xl lg:text-start lg:text-5xl font-bold text-[#002A47]">
        Whoops... This page is not available
      </p>
      <p className="mt-5 md:mt-6 text-base lg:text-start lg:text-xl text-[#476D85]">
        Unfortunaltely, we couldn&apos;t find the page you are looking for. We
        suggest you go back to our homepage
      </p>
      <div className="mt-8 lg:mt-14 ">
        <SustainButton className="text-xs lg:text-base font-medium">
          Go back home
        </SustainButton>
      </div>
    </div>
  );
};

export default ErrorPage;
