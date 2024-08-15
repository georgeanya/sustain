import React from "react";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import image from "../public/assets/user.svg";
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
          team: string; // Add 'team' property here
        };
      };
    };
    image: {
      data: {
        attributes: {
          url: string; // Update image type to include 'url'
        };
      };
    };
  };
}

const PatientStories = ({ blogs }: { blogs: { data: Blog[] } }) => {
  const filteredBlogs = blogs.data.filter(
    (blogpost) =>
      blogpost.attributes.category.data.attributes.name === "Patient stories"
  );

  return (
    <>
      <Navbar1 />
      <div className="px-5 md:px-32 md:mt-24 mt-16">
        <h1 className="text-4lg md:text-center  md:text-5xl font-bold text-[#002A47]">
          Patient stories
        </h1>
        <p className="mt-5 md:mt-5 text-base leading-7 md:text-center  md:text-2lg text-[#476D85] max-w-[500px]">
          Hear the inspiring stories of real Custodia patients who have changed
          the trajectory of their health.
        </p>
      </div>
      <div className="px-5 md:px-32 mt-10 md:mt-[55px] grid md:grid-cols-3 md:grid-rows-1 md:gap-y-26 gap-15 md:mb-18 mb-15">
        {filteredBlogs.map((blogpost: Blog) => {
          const { id, attributes } = blogpost;
          const imgUrl = attributes.image.data.attributes.url; // Move ImgUrl inside the map function
          return (
            <div className="max-w-[357px] md:h-[540px] flex flex-col justify-between">
              <div>
                <Link href={`/blog/${attributes.slug}`} key={id}>
                  <a>
                    <img
                      src={imgUrl}
                      alt=""
                      className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                    />
                  </a>
                </Link>
                <p className=" text-sm text-[#4F9EEA] mt-7">
                  {attributes.category.data.attributes.name}
                </p>
                <Link href={`/blog/${attributes.slug}`} key={id}>
                  <a className="text-[#002A47] font-bold text-[26px] leading-[32px] md:text-1xl md:leading-8 mt-2.5 md:mt-3 cursor-pointer">
                    {attributes.title}
                  </a>
                </Link>
                <p className="text-[#476D85] mt-4 md:mt-5 text-base leading-6 md:leading-7 md:text-lg">
                  {attributes.description}
                </p>
              </div>
              <div className="flex mt-7 md:mt-10">
                <img src={image.src} alt="" className="w-12 rounded-[25px]" />
                <div className="ml-4 self-center">
                  <p className="text-[#002A47] text-sm md:text-base leading-5 font-medium">
                    {attributes.author.data.attributes.name}
                  </p>
                  <p className="text-[#476D85] text-xs">
                    {attributes.author.data.attributes.team}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-5 md:px-32 mb-17 md:mb-36">
        <SustainOutlineButton>Show more posts</SustainOutlineButton>
      </div>
      <Footer />
    </>
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

export default PatientStories;
