import React from "react";
import Navbar1 from "../components/navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import teamImage from "../public/assets/teamImage.svg";
import Footer from "../components/footer";
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
    padding: "16px 30px",
  },
});

const About = () => {
  return (
    <div>
      <Navbar1 />
      <div className="">
        <div className="px-5 lg:px-66 pt-18 lg:pt-20 flex flex-col justify-center pb-24 lg:pb-36">
          <h2 className="text-4lg lg:text-center lg:text-5xl font-bold text-[#002A47] md:max-w-2xl flex md:self-center max-w-lg">
            Reversing chronic metabolic disease at scale
          </h2>
          <p className="mt-6 md:mt-6 text-base md:text-center lg:text-2lg text-[#476D85] max-w-l flex md:self-center">
            We are on a simply, yet ambitious mission to to treat and reverse
            chronic metabolic diseases in 5 million Africans by 2030 using
            simple lifestyle changes.
          </p>
        </div>
        <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 bg-[#EFF2FA]">
          <p className=" text-2xl md:text-start md:text-4xl font-bold text-[#002A47]">
            Our story
          </p>
          <p className="mt-7 md:mt-9 text-base  md:text-start md:text-1lg text-[#002A47] md:max-w-3xl">
            If you have been living with a chronic metabolic disease, there’s a
            high chance you’re probably feeling frustrated and scared. No matter
            what you do, your blood sugar and blood pressure continues to go up
            and you don’t feel well.
          </p>
          <p className="mt-7 md:mt-9 text-base  md:text-start md:text-1lg text-[#002A47] md:max-w-3xl">
            The medications you have to take keep increasing and these
            medications cost a lot of money. and your condition steals your time
            by limiting your ability to do the things you love.
          </p>
          <p className="mt-7 md:mt-9 text-base  md:text-start md:text-1lg text-[#002A47]">
            Don’t give up, Custodia takes these burdens away!
          </p>
        </div>
        <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24">
          <p className=" text-2xl md:text-start md:text-4xl font-bold text-[#002A47]">
            The team
          </p>
          <p className="mt-7 md:mt-9 text-basex  md:text-start md:text-2lg text-[#002A47] max-w-l">
            We’re a diverse, close-knit team of innovators changing the way the
            world thinks about metabolic health.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-12 md:gap-26 mt-11 md:mt-14">
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Dr. Olusina Ajidahun
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">CEO</p>
            </div>
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Joseph Anya
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">Product</p>
            </div>
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Promise Anya
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">
                Operations
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Adeola D-Great
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">
                Nutrition
              </p>
            </div>
          </div>
          <p className=" text-2xl md:text-start md:text-4xl font-bold text-[#002A47] mt-18 md:mt-26">
            Advisors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-12 md:gap-26 mt-9 md:mt-14">
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Opeyemi Awoyemi
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">
                FastForward
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Omolara Awoyemi
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">
                FastForward
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                David Unwin, MD
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">NHS</p>
            </div>
            <div>
              <img src={teamImage.src} alt="" className="" />
              <p className="font-medium text-sm md:text-lg text-[#002A47] mt-5">
                Opeyemi Awoyemi
              </p>
              <p className="text-xs md:text-sm text-[#476D85] mt1.5">
                Founder, FastForward
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-40 pb-24 bg-[#EFF2FA]">
          <p className=" text-2xl md:text-start md:text-4xl font-bold text-[#002A47] md:max-w-l">
            Work on something that matters
          </p>
          <p className="mt-7 md:mt-9 text-base  md:text-start md:text-3lg text-[#002A47] md:max-w-xl">
            We are looking for talented people who want to build the future of
            chronic metabolic disease care. If this is you, please join us.
          </p>
          <div className="mt-8 lg:mt-12">
            <Link href="/404">
              <SustainButton className="text-sm lg:text-base font-medium">
                See current openings
              </SustainButton>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
