import React, { useEffect, useState } from "react";
import image from "../public/assets/user.svg";
import facebook from "../public/assets/facebook.svg";
import twitter from "../public/assets/twitter.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Moment from "react-moment";
import style from "../pages/blog/markdown-styles.module.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Link from "next/link";

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

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Blog {
  id: number;
  attributes: {
    title: string;
    publishedAt: string;
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
          team: string;
        };
      };
    };
    seo: {
      metaTitle: string;
    };
  };
}

interface ArticlesResponse {
  data: Blog[];
}

const BlogPost = ({ blog }: any) => {
  const [fetchedBlog, setFetchedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const ImgUrl = blog?.attributes?.image.data.attributes?.url;
  const url = `https://custodiahealth.com/blog/${blog?.attributes?.slug}`;

  useEffect(() => {
    if (blog?.attributes?.slug) {
      axios
        .get<ArticlesResponse>(
          `https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage&${blog.attributes.slug}`
        )
        .then(({ data }) => {
          const fetchedBlogData = data.data.find(
            (fetchedBlog) =>
              fetchedBlog.attributes.slug === blog.attributes.slug
          );

          setFetchedBlog(fetchedBlogData || null);
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [blog?.attributes?.slug]);

  if (loading) {
    return (
      <div className="flex justify-center py-[180px] md:py-[220px]">
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

  return (
    <div>
      <div className="md:px-[245px] md:pt-[70px] pt-[65px] px-5">
        <div className="flex text-[#4F9EEA] md:text-[14px] md:leading-[19px] text-[14px] leading-[16.5px]">
          <p>{fetchedBlog?.attributes?.category.data.attributes?.name}</p>
          <p className="px-1">•</p>
          <p>
            <Moment
              format="MMM DD YYYY"
              date={fetchedBlog?.attributes?.publishedAt}
            />
          </p>
        </div>
        <h1 className="mt-4 md:text-[48px] md:leading-[61px] leading-[40px] text-[30px] text-[#002A47] font-bold">
          {fetchedBlog?.attributes?.title}
        </h1>
        <div className="flex mt-7 md:mt-[30px]">
          <img src={image.src} alt="" className="w-12 rounded-[25px]" />
          <div className="ml-4 self-center">
            <p className="text-[#002A47] text-sm md:text-base font-medium">
              {fetchedBlog?.attributes?.author.data.attributes?.name}
            </p>
            <p className="text-[#476D85] text-xs">
              {fetchedBlog?.attributes?.author.data.attributes?.team}
            </p>
          </div>
        </div>
        {/* <img
          src={ImgUrl}
          alt=""
          className="cursor-pointer w-full rounded-[20px] md:mt-[50px] mt-[35px]"
        /> */}
        <div className="md:mt-[55px] mt-[45px] md:flex flex-row justify-between">
          <div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={style.reactMarkDown}
            >
              {fetchedBlog?.attributes.content || ""}
            </ReactMarkdown>

            <div className="bg-[#F0F7FF] px-5 py-10 md:p-12 md:flex justify-between md:mt-14 md:mb-36 mb-9 mt-9 rounded-[20px]">
              <div className="max-w-[385px]">
                <p className="text-[#002A47] md:text-[28px] text-[22px] leading-[28px] md:leading-[35px] mb-4 font-bold">
                Why manage diabetes when it can be reversed
                </p>
                <p className="text-[#4F9EEA] md:text-xl md:leading-[28px] mb-6 md:mb-0 md:text-[18px] leading-6">
                Get personalized treatment for reversing type 2 diabetes without leaving home
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  { blog: Blog },
  Params
> = async ({ params }) => {
  try {
    const { slug } = params as Params;
    const { data } = await axios.get<ArticlesResponse>(
      `https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage&${slug}`
    );
    const blog = data.data.find((blog) => blog.attributes?.slug === slug);

    if (!blog) {
      throw new Error("Blog not found");
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
  }
};

export default BlogPost;
