import React, { useState, useMemo } from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import image from "../public/assets/image.svg";
import a1ctest from "../public/assets/aictest.svg";
import virus from "../public/assets/virus.svg";
import BlogList from "../components/blogList";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { GetStaticProps } from "next";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
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
    slug: string;
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
}

type BlogCategory = "All" | "Patient stories" | "Engineering" | "Company" | "Research" | "Nutrition"

const BlogHome = ({ blogs }: any) => {
  console.log(blogs);
  const [toggleState, setToggleState] = useState<BlogCategory>("All");

  const toggleTab = (index: BlogCategory) => {
    setToggleState(index);
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setToggleState(event.target.value as BlogCategory);
  };

  const blog = blogs.data?.slice(0, 1)[0] || [];

  const blogsToDisplay = useMemo(() => {
    console.log(blogs.data);
    
    if (toggleState === "All") {
      return blogs.data.slice(1)
    }
    return blogs.data?.slice(1).filter((blog: any) => {
      return blog.attributes.category.data.attributes.name === toggleState
    })
  }, [blogs, toggleState]);

  return (
    <div>
      <Navbar1 />
      <div className="px-5 md:px-32 md:mb-24 mb-15">
        <p className=" text-sm md:text-llg font-normal mt-10 md:mt-14 text-[#002A47]">
          <span className=" font-bold">Blog</span> | Updates from the Custodia
          Health team
        </p>
        <div className="md:flex justify-between mt-9 md:mt-10">
          <Link href={`/blog/${blog.attributes.slug}`}>
            <img src={virus.src} alt="" className="cursor-pointer" />
          </Link>
          <div className=" md:ml-17 mt-7 md:mt-0 self-center">
            <p className=" text-sm text-[#476D85]">
              {blog.attributes.category.data.attributes.name}
            </p>
            <Link href={`/blog/${blog.attributes.slug}`}>
              <p className="cursor-pointer text-[#002A47] font-bold text-llg md:text-4lg mt-2.5 md:mt-3">
                {blog.attributes.title}
              </p>
            </Link>
            <p className="text-[#476D85] mt-4 md:mt-5 text-base md:text-lg">
              {blog.attributes.description}
            </p>
            <div className="flex mt-7 md:mt-10">
              <img src={image.src} alt="" className="w-12" />
              <div className="ml-4 self-center">
                <p className="text-[#002A47] text-sm md:text-base font-medium">
                  {blog.attributes.author.data.attributes.name}
                </p>
                <p className="text-[#476D85] text-xs">Clinical Ops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 md:px-32 mb-24">
          <div className="hidden md:block">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "All"
                      ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#476D85]"
                  }
                  onClick={() => toggleTab("All")}
                >
                  All
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Patient stories"
                      ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#476D85]"
                  }
                  onClick={() => toggleTab("Patient stories")}
                >
                  Patient stories
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Engineering"
                      ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#476D85]"
                  }
                  onClick={() => toggleTab("Engineering")}
                >
                  Engineering
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Company"
                      ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#476D85]"
                  }
                  onClick={() => toggleTab("Company")}
                >
                  Company
                </p>
              </li>
              <li className="mr-2 cursor-pointer">
                <p
                  className={
                    toggleState === "Research"
                      ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#476D85]"
                  }
                  onClick={() => toggleTab("Research")}
                >
                  Research
                </p>
              </li>
              <li className="cursor-pointer">
                <p
                  className={
                    toggleState === "Nutrition"
                      ? "inline-block px-5 py-3 text-white bg-[#4F9EEA] rounded-3xl active"
                      : "inline-block px-6 py-3 text-[#476D85]"
                  }
                  onClick={() => toggleTab("Nutrition")}
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
              <option value="All">All</option>
              <option value="Patient stories">Patient stories</option>
              <option value="Engineering">Engineering</option>
              <option value="Company">Company</option>
              <option value="Research">Research</option>
              <option value="Nutrition">Nutrition</option>
            </select>
          </div>
          <div className="mt-10 grid md:grid-cols-3 md:grid-rows-1 md:gap-y-26 gap-15 md:mb-18 mb-15">
            {blogsToDisplay.map((blogpost: any) => {
              
              const blog = blogpost;
              const { id, attributes } = blog;
              console.log(attributes.category);
              
              return (
                <Link href={`/blog/${attributes.slug}`} key={id}>
                  <div className="max-w-[357px]">
                    <img src={a1ctest.src} alt="" className="cursor-pointer" />
                    <div className="mt-7">
                      <p className=" text-sm text-[#476D85]">
                        {attributes.category.data.attributes.name}
                      </p>
                      <p className="text-[#002A47] font-bold text-llg md:text-1xl md:leading-8 mt-2.5 md:mt-3 cursor-pointer">
                        {attributes.title}
                      </p>
                      <div className="flex-col flex justify-between">
                        <p className="text-[#476D85] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
                          {attributes.description}
                        </p>
                        <div className="flex mt-7 md:mt-10">
                          <img src={image.src} alt="" className="w-12" />
                          <div className="ml-4 self-center">
                            <p className="text-[#002A47] text-sm md:text-base md:leading-5 font-medium">
                              {attributes.author.data.attributes.name}
                            </p>
                            <p className="text-[#476D85] text-xs">
                              Clinical Ops
                            </p>
                          </div>
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
      </div>
      <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-28 pb-20 bg-[#EFF2FA]">
        <p className="md:text-4xl text-2xl text-[#002A47] font-bold max-w-[476px]">
          Stay updated by joining our newsletter
        </p>
        <p className=" text-bases md:text-xl text-[#002A47] max-w-[574px] mt-5 md:mt-6 mb-10 md:mb-12">
          Subscribe to recieve updates about our blog posts and announcements
          directly in your mailbox
        </p>
        <form action="" method="post" className="flex flex-wrap">
          <input
            type="text"
            placeholder="Enter your email"
            className="border mb-4 md:mb-0 h-12 md:h-15 md:max-w-[462px] border-gray-300 text-gray-900 text-sm rounded-2xl  block w-full p-2.5 md:mr-5"
          />
          <SustainButton>Subscribe</SustainButton>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    "https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author"
  );
  return {
    props: {
      blogs: data,
    },
  };
};

export default BlogHome;
