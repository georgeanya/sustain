import React, { useState, useMemo } from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import image from "../public/assets/user.svg";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";
import Head from "next/head";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SustainOutlineButton = styled(Button)({
  background: "white !important",
  fontFamily: "Circular Std",
  color: "#4F9EEA",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  border: "1px solid #4F9EEA",
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

type BlogCategory =
  | "All"
  | "Patient stories"
  | "Engineering"
  | "Company"
  | "Research"
  | "Nutrition";

const BlogHome = ({ blogs }: any) => {
  console.log(blogs);
  const [toggleState, setToggleState] = useState<BlogCategory>("All");
  const [loading, setLoading] = useState(true);

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
      return blogs.data.slice(1);
    }
    return blogs.data?.slice(1).filter((blog: any) => {
      return blog.attributes.category.data.attributes.name === toggleState;
    });
  }, [blogs, toggleState]);

  const ImgUrl = blog.attributes.image.data.attributes.url;

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Custodia Health Blog</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, reverse diabetes, high cholesterol, patient stories, custodia blog"
        />
        <meta
          name="description"
          content="Find insightful tips and tricks for taking control of your health, read our patient stories, and more"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/blog" property="og:url" />
        <meta content="Custodia Health Blog" property="og:title" />
        <meta
          content="Find insightful tips and tricks for taking control of your health, read our patient stories, and more"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta
          content="An image of the Custodia Health logo"
          property="og:image:alt"
        />
        <meta
          content="https://www.instagram.com/custodiahealth"
          property="og:see_also"
        />
        <meta
          content="https://www.linkedin.com/company/custodia-health"
          property="og:see_also"
        />
        <meta
          content="https://www.facebook.com/custodiahealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/custodiahealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@custodiahealth" />
        <meta name="twitter:creator" content="@custodiahealth" />
        <meta name="twitter:title" content="Custodia Health Blog" />
        <meta
          name="twitter:description"
          content="Find insightful tips and tricks for taking control of your health, read our patient stories, and more"
        />
        <meta
          name="twitter:image"
          content="https://custodiahealth.com/_next/static/media/custodia-metacard.9e18efee.png"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link href="https://custodiahealth.com/blog" rel="canonical" />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
      </Head>
      <Navbar1 />
      <div className="px-5 md:px-32 md:mb-24 mb-15">
        <p className=" text-sm md:text-llg font-normal mt-10 md:mt-12 text-[#002A47]">
          <span className=" font-bold">Blog</span> | The latest stories and
          updates from the team
        </p>
        <div className="md:flex justify-between mt-9 md:mt-10">
          <Link href={`/blog/${blog.attributes.slug}`}>
            <img
              src={ImgUrl}
              alt=""
              className="cursor-pointer w-full md:w-[660px] md:h-[428px] rounded-[20px]"
            />
          </Link>
          <div className=" md:ml-17 mt-7 md:mt-0 self-center">
            <p className=" text-sm text-[#4F9EEA] leading-[17px]">
              {blog.attributes.category.data.attributes.name}
            </p>
            <Link href={`/blog/${blog.attributes.slug}`}>
              <p className="cursor-pointer text-[#002A47] font-bold text-[26px] leading-[32px] md:text-4lg mt-2.5 md:mt-3">
                {blog.attributes.title}
              </p>
            </Link>
            <p className="text-[#476D85] mt-4 md:mt-5 text-base md:text-lg">
              {blog.attributes.description}
            </p>
            <div className="flex mt-7 md:mt-10">
              <img src={image.src} alt="" className="w-12 rounded-[25px]" />
              <div className="ml-4 self-center">
                <p className="text-[#002A47] text-sm md:text-base leading-5 font-medium">
                  {blog.attributes.author.data.attributes.name}
                </p>
                <p className="text-[#476D85] text-xs">
                  {blog.attributes.author.data.attributes.team}
                </p>
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
              <option hidden defaultValue={"Browse by category"}>
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
                  <div className="max-w-[357px] md:h-[540px] flex flex-col justify-between">
                    <div>
                      <img
                        src={attributes.image.data.attributes.url}
                        alt=""
                        className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                      />

                      <p className=" text-sm text-[#4F9EEA] mt-7">
                        {attributes.category.data.attributes.name}
                      </p>
                      <p className="text-[#002A47] font-bold text-[26px] leading-[32px] md:text-1xl md:leading-8 mt-2.5 md:mt-3 cursor-pointer">
                        {attributes.title}
                      </p>
                      <p className="text-[#476D85] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
                        {attributes.description}
                      </p>
                    </div>
                    <div className="flex mt-7 md:mt-10">
                      <img
                        src={image.src}
                        alt=""
                        className="w-12 rounded-[25px]"
                      />
                      <div className="ml-4 self-center">
                        <p className="text-[#002A47] text-sm md:text-base leading-5 font-medium">
                          {blog.attributes.author.data.attributes.name}
                        </p>
                        <p className="text-[#476D85] text-xs">
                          {blog.attributes.author.data.attributes.team}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <SustainOutlineButton>Show more posts</SustainOutlineButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(
    "https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc",
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  return {
    props: {
      blogs: data,
      revalidate: 10, // Set the revalidation interval to 10 seconds
    },
  };
};

export default BlogHome;
