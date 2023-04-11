import React, { useState } from "react";
import BlogCard from "./blogCard";
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

const BlogList = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setToggleState(Number(event.target.value));
  };
  return (
    <div className="px-5 md:px-32 mb-24">
      <div className="hidden md:block">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <p
              className={
                toggleState === 1
                  ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                  : "inline-block px-6 py-3 text-[#476D85]"
              }
              onClick={() => toggleTab(1)}
            >
              All
            </p>
          </li>
          <li className="mr-2">
            <p
              className={
                toggleState === 2
                  ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                  : "inline-block px-6 py-3 text-[#476D85]"
              }
              onClick={() => toggleTab(2)}
            >
              Patient stories
            </p>
          </li>
          <li className="mr-2">
            <p
              className={
                toggleState === 3
                  ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                  : "inline-block px-6 py-3 text-[#476D85]"
              }
              onClick={() => toggleTab(3)}
            >
              Engineering
            </p>
          </li>
          <li className="mr-2">
            <p
              className={
                toggleState === 4
                  ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                  : "inline-block px-6 py-3 text-[#476D85]"
              }
              onClick={() => toggleTab(4)}
            >
              Company
            </p>
          </li>
          <li>
            <p
              className={
                toggleState === 5
                  ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                  : "inline-block px-6 py-3 text-[#476D85]"
              }
              onClick={() => toggleTab(5)}
            >
              Research
            </p>
          </li>
          <li>
            <p
              className={
                toggleState === 6
                  ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                  : "inline-block px-6 py-3 text-[#476D85]"
              }
              onClick={() => toggleTab(6)}
            >
              Nutrition
            </p>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <select
          name="category"
          onChange={handleSelect}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-white h-11 md:h-12"
        >
          <option hidden selected>
            Browse by category
          </option>
          <option value="1">All</option>
          <option value="2">Patient stories</option>
          <option value="3">Engineering</option>
          <option value="4">Company</option>
          <option value="5">Research</option>
          <option value="6">Nutrition</option>
        </select>
      </div>
      <div className="mt-10 grid md:grid-cols-3 md:gap-y-26 gap-15 md:mb-18 mb-15">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
          </div>
          <SustainButton>Show more posts</SustainButton>
    </div>
  );
};

export default BlogList;
