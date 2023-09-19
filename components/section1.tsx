import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
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
    padding: "16px 30px",
  },
});

const Section1 = () => {
  return (
    <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 ">
      <p className=" text-3xl md:text-start md:text-4xl font-bold text-[#002A47]">
        We understand you
      </p>
      <p className="mt-7 md:mt-9 text-base leading-6 md:text-start md:text-1lg text-[#002A47] md:max-w-3xl">
        If you have been living with a chronic metabolic disease, you may be
        frustrated and scared. No matter what you do, your blood sugar and blood
        pressure continue to rise and you don't feel well. The number of
        medications you have to take keeps increasing and they cost a lot of
        money, which doesn't make it any easier to manage.
      </p>
      <p className="mt-7 md:mt-9 text-base leading-6 md:text-start md:text-1lg text-[#002A47] md:max-w-3xl">
        The disease steals your time by limiting your ability to do the things
        you love. It can be hard to enjoy life when you're constantly worrying
        about your health and we get it.
      </p>
      <p className="mt-7 md:mt-9 text-base leading-6 md:text-start md:text-1lg text-[#002A47]">
        Don't give up! Custodia can take these burdens away! 
      </p>
      <div className="mt-10 md:mt-12 ">
        <Link href="/start">
          <SustainButton className="text-xs md:text-base font-medium">
            Get started now
          </SustainButton>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
