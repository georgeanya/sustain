import React from "react";
import image from "../../public/assets/user.svg";
import virus1 from "../../public/assets/virus1.svg";
import facebook from "../../public/assets/facebook.svg";
import twitter from "../../public/assets/twitter.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Footer from "../../components/footer";
import Navbar1 from "../../components/navbar1";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Moment from "react-moment";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/custodia-metacard.png";
import Head from "next/head";
import Link from "next/link";
import style from "./markdown-styles.module.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";

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
    seo: {
      metaTitle: string;
    };
  };
}

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
  const ImgUrl = blog.attributes.image.data.attributes.url;
  const url = `https://custodiahealth.com/blog/${blog.attributes.slug}`;
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${blog.attributes.seo.metaTitle} - Custodia Health`}</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta name="keywords" content={blog.attributes.seo.keywords} />
        <meta
          name="description"
          content={blog.attributes.seo.metaDescription}
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="article" property="og:type" />
        <meta content={url} property="og:url" />
        <meta
          content={`${blog.attributes.seo.metaTitle} - Custodia Health`}
          property="og:title"
        />
        <meta
          content={blog.attributes.seo.metaDescription}
          property="og:description"
        />
        <meta
          content={
            blog.attributes.seo.shareImage.data.attributes.formats.small.url
          }
          property="og:image"
        />
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
        <meta
          name="twitter:title"
          content={`${blog.attributes.seo.metaTitle} - Custodia Health`}
        />
        <meta
          name="twitter:description"
          content={blog.attributes.seo.metaDescription}
        />
        <meta
          name="twitter:image"
          content={
            blog.attributes.seo.metaTwitterImage.data.attributes.formats.medium
              .url
          }
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link
          href={`https://custodiahealth.com/blog/${blog.attributes.slug}`}
          rel="canonical"
        />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
      </Head>
      <Navbar1 />
      <div className="md:px-[245px] md:pt-[60px] pt-[55px] px-5">
        <div className="flex text-[#4F9EEA] md:text-[14px] md:leading-[19px] text-[14px] leading-[16.5px]">
          <p>{blog.attributes.category.data.attributes.name}</p>
          <p className="px-1">•</p>
          <p>
            <Moment format="MMM DD YYYY" date={blog.attributes.publishedAt} />
          </p>
        </div>
        <h1 className="mt-4 md:text-[48px] md:leading-[61px] leading-[40px] text-[30px] text-[#002A47] font-bold">
          {blog.attributes.title}
        </h1>
        <div className="flex mt-7 md:mt-[30px]">
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
        {/* <img
          src={ImgUrl}
          alt=""
          className="cursor-pointer w-full rounded-[20px] md:mt-[50px] mt-[35px]"
        /> */}
        <div className="md:mt-[55px] mt-[40px] md:flex flex-row justify-between">
          <div>
            <ReactMarkdown
              children={blog.attributes.content}
              remarkPlugins={[remarkGfm]}
              className={style.reactMarkDown}
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
                <Link href="/">
                  <SustainButton>Get started now</SustainButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col md:ml-12 md:min-w-[40px] mb-20">
            <FacebookShareButton url={url}>
              {" "}
              <img src={facebook.src} alt="" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              {" "}
              <img src={twitter.src} className="md:mt-5 ml-5 md:ml-0" alt="" />
            </TwitterShareButton>
          </div>
        </div>
      </div>
      {/* <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-28 pb-20 bg-[#EFF2FA]">
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
      </div> */}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  { blog: Blog },
  Params
> = async ({ params }) => {
  const { slug } = params as Params;
  const { data } = await axios.get<ArticlesResponse>(
    `https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage&${slug}`
  );
  const blog = data.data.find((blog) => blog.attributes.slug === slug);
  return {
    props: {
      blog: blog || ({} as Blog),
    },
  };
};

export default BlogPage;
