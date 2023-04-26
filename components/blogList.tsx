import React, { useState } from "react";
import BlogCard from "./blogCard";

import axios from "axios";
import Link from "next/link";
import image from "../public/assets/image.svg";
import a1ctest from "../public/assets/aictest.svg";


import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const SustainButton = styled(Button)({
  color: "#4F9EEA !important",
  fontFamily: "Circular Std",
  background: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  border: "solid 1px #4F9EEA",
  textTransform: "none",
  lineHeight: "20px",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

interface Blog {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: any; 
  };
}

interface Props {
  blogs: Blog[];
}

const BlogList = ({ blogs }: Props) => {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setToggleState(Number(event.target.value));
  };
  return (
    <div className="px-5 md:px-32 mb-24">

      <div className="mt-10 grid md:grid-cols-3 md:gap-y-26 gap-15 md:mb-18 mb-15">
        {blogs?.map(({ id, attributes }: any) => {
          return (
            <Link href={`/blog/${attributes.slug}`} key={id}>
              <div className="max-w-[357px]">
                <img src={a1ctest.src} alt="" />
                <div className="mt-7">
                  <p className=" text-sm text-[#476D85]">Research</p>
                  <p className="text-[#002A47] font-bold text-llg md:text-1xl md:leading-8 mt-2.5 md:mt-3">
                    {attributes.title}
                  </p>
                  <p className="text-[#476D85] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
                  {attributes.description}
                  </p>
                  <div className="flex mt-7 md:mt-10">
                    <img src={image.src} alt="" className="w-12" />
                    <div className="ml-4 self-center">
                      <p className="text-[#002A47] text-sm md:text-base md:leading-5 font-medium">
                        Dr. Yetunde Wonda
                      </p>
                      <p className="text-[#476D85] text-xs">Clinical Ops</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <SustainButton>Show more posts</SustainButton>
    </div>
  );
};

export default BlogList;
