import React from "react";
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
    slug: any;
  };
}

// interface Props {
//   blogs: Blog[];
// }

const BlogHome = ({ blogs }: any) => {
  console.log(blogs);

  return (
    <div>
      <Navbar1 />
      <div className="px-5 md:px-32 md:mb-24 mb-15">
        <p className=" text-sm md:text-llg font-normal mt-10 md:mt-14 text-[#002A47]">
          <span className=" font-bold">Blog</span> | Updates from the Custodia
          Health team
        </p>
        <div className="md:flex justify-between mt-9 md:mt-10">
          <img src={virus.src} alt="" />
          <div className=" md:ml-17 mt-7 md:mt-0 self-center">
            <p className=" text-sm text-[#476D85]">Research</p>
            <p className="text-[#002A47] font-bold text-llg md:text-4lg mt-2.5 md:mt-3">
              What’s an A1C Test and Why Might You Need one?
            </p>
            <p className="text-[#476D85] mt-4 md:mt-5 text-base md:text-lg">
              There are many reasons that understanding your blood glucose
              levels is beneficial — they are a key indicator of health, and
              they are especially useful in understanding your risk for
              prediabetes or type 2 diabetes.
            </p>
            <div className="flex mt-7 md:mt-10">
              <img src={image.src} alt="" className="w-12" />
              <div className="ml-4 self-center">
                <p className="text-[#002A47] text-sm md:text-base font-medium">
                  Dr. Yetunde Wonda
                </p>
                <p className="text-[#476D85] text-xs">Clinical Ops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 md:px-32 mb-24">
          <div className="mt-10 grid md:grid-cols-3 md:gap-y-26 gap-15 md:mb-18 mb-15">
            {blogs.data?.map(({ id, attributes }: any) => {
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
    "https://custodia-health-blog.herokuapp.com/api/articles"
  );
  return {
    props: {
      blogs: data,
    },
  };
};

export default BlogHome;