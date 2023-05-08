import React from "react";
import image from "../../public/assets/user.svg";
import virus1 from "../../public/assets/virus1.svg";
import facebook from "../../public/assets/facebook.svg";
import twitter from "../../public/assets/twitter.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import Footer from "../../components/footer";
import Navbar1 from "../../components/navbar1";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Moment from "react-moment";

interface Params extends ParsedUrlQuery {
  slug: string;
}

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

const ArrowIcon = styled(ArrowBackIcon)({
  color: "#476D85",
  padding: "1.5px",
  marginTop: "-2px",
  width: "26px",
  marginRight: "10px",
});

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

interface ArticlesResponse {
  data: Blog[];
}

const BlogPage = ({ blog }: any) => {
  console.log(blog);

  return (
    <div>
      <Navbar1 />

      <div className="md:px-[245px] md:pt-[50px] pt-[45px] px-5">
        <img src={virus1.src} alt="" className="w-full " />
        <div className="flex md:mt-[55px] mt-[30px] text-[#476D85] md:text-[16px] md:leading-[19px] text-[14px] leading-[16.5px]">
          <p>{blog.attributes.category.data.attributes.name}</p>
          <p className="px-1">•</p>
          <p>
            <Moment format="MMM DD YYYY">{blog.attributes.published_at}</Moment>
          </p>
        </div>
        <p className="mt-4 md:text-[36px] md:leading-[45px] text-[20px] leading-[27px] text-[#002A47] font-bold">
          {blog.attributes.title}
        </p>
        <div className="flex mt-7 md:mt-10">
          <img src={image.src} alt="" className="w-12 rounded-[25px]" />
          <div className="ml-4 self-center">
            <p className="text-[#002A47] text-sm md:text-base font-medium">
              {blog.attributes.author.data.attributes.name}
            </p>
            <p className="text-[#476D85] text-xs">
              {blog.attributes.author.data.attributes.team}
            </p>
          </div>
        </div>
        <div className="md:mt-[55px] mt-[45px] md:flex flex-row justify-between">
          <div>
            <ReactMarkdown
              children={blog.attributes.content}
              remarkPlugins={[remarkGfm]}
              className="md:text-lg md:leading-[30px] text-[16px] leading-[26px] text-[#476D85]"
            />

            <div className="bg-[#F0F7FF] px-5 py-10 md:p-12 md:flex justify-between md:mt-14 md:mb-36 mb-9 mt-9 rounded-[20px]">
              <div className="max-w-[385px]">
                <p className="text-[#002A47] md:text-2xl text-[22px] leading-[28px] md:leading-[35px] mb-4 font-bold">
                  Why manage diabetes when it can be reversed
                </p>
                <p className="text-[#4F9EEA] md:text-xl mb-6 md:mb-0 md:text-[18px] leading-6">
                  Get personalized treatment for reversing type 2 diabetes
                  without leaving home
                </p>
              </div>
              <div className="self-center">
                <SustainButton>Book a consultation now</SustainButton>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col md:ml-12 md:min-w-[40px] mb-20">
            <img src={facebook.src} alt="" />
            <img src={twitter.src} className="md:mt-5 ml-5 md:ml-0" alt="" />
          </div>
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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { data } = await axios.get<ArticlesResponse>(
    "https://custodia-health-blog.herokuapp.com/api/articles"
  );
  const paths = data.data.map(({ attributes }) => ({
    params: { slug: attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ blog: Blog }, Params> = async ({
  params,
}) => {
  const { slug } = params as Params;
  const { data } = await axios.get<ArticlesResponse>(
    `https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=seo&${slug}`
  );
  const blog = data.data.find((blog) => blog.attributes.slug === slug);
  return {
    props: {
      blog: blog || ({} as Blog),
    },
  };
};

export default BlogPage;
