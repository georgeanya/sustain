import React, { useState, useMemo, useEffect } from "react";
import image from "../public/assets/user.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";

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


const Blog = ({ initialBlogs }: any) => {
  const [blogs, setBlogs] = useState(initialBlogs || null); 
  const [toggleState, setToggleState] = useState<BlogCategory>("All");

  useEffect(() => {
    if (!initialBlogs) {
      fetchData();
    }
  }, [initialBlogs]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const blogsToDisplay = useMemo(() => {
    console.log(blogs);

    if (toggleState === "All") {
      return blogs?.data.slice(1);
    }
    return blogs.data?.slice(1).filter((blog: any) => {
      return blog.attributes.category.data.attributes.name === toggleState;
    });
  }, [blogs, toggleState]);

  if (!blogs) {
    return (
      <div  className="flex justify-center py-[180px] md:py-[220px]">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-16 h-16 mr-2 text-gray-200 animate-spin fill-[#4F9EEA]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="text-gray-200 sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  

  const toggleTab = (index: BlogCategory) => {
    setToggleState(index);
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setToggleState(event.target.value as BlogCategory);
  };

  const blog = blogs?.data?.slice(0, 1)[0] || [];

  const ImgUrl = blog.attributes?.image.data.attributes.url;

  return (
    <div>
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
              className="cursor-pointer w-full md:w-[660px] md:h-[380px] rounded-[20px]"
            />
          </Link>
          <div className=" md:ml-17 mt-7 md:mt-0 self-center">
            <p className=" text-sm text-[#4F9EEA] leading-[17px]">
              {blog.attributes.category.data.attributes.name}
            </p>
            <Link href={`/blog/${blog.attributes.slug}`}>
              <h1 className="cursor-pointer text-[#002A47] font-bold text-[26px] leading-[32px] md:text-4lg mt-2.5 md:mt-3">
                {blog.attributes.title}
              </h1>
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
                  <div className="max-w-[357px] flex flex-col justify-between">
                    <div>
                      <img
                        src={attributes.image.data.attributes.url}
                        alt=""
                        className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                      />

                      <p className=" text-sm text-[#4F9EEA] mt-[24px]">
                        {attributes.category.data.attributes.name}
                      </p>
                      <p className="text-[#002A47] font-bold text-[22px] leading-[28px] mt-[12px] cursor-pointer">
                        {attributes.title}
                      </p>
                      {/* <p className="text-[#476D85] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
                        {attributes.description}
                      </p> */}
                    </div>
                    <div className="flex mt-4">
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      "https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc"
    );

    return {
      props: {
        initialBlogs: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialBlogs: null,
      },
    };
  }
};

export default Blog;