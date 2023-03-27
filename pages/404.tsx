import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const ErrorPage = () => {
  return (
    <div>
      <Navbar1 />
      <div className="px-5 md:px-32 md:max-w-3xl pt-12 md:pt-32 pb-24 md:pb-36">
        <p className="text-4lg md:text-start md:text-5xl font-bold text-[#002A47]">
          Whoops... This page is not available
        </p>
        <p className="mt-5 md:mt-6 text-base md:text-start md:text-2lg text-[#476D85]">
          Unfortunaltely, we couldn&apos;t find the page you are looking for. We
          suggest you go back to our homepage
        </p>
        <div className="mt-8 md:mt-14 ">
          <SustainButton className="text-xs md:text-base font-medium" href="/">
            Go back home
          </SustainButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
