import React, { useEffect, useState } from "react";
import Navbar1 from "../../../components/navbar1";
import Footer from "../../../components/footer";
import axios from "axios";
import Link from "next/link";
import image from "../../../public/assets/user.svg";
import left from "../../../public/assets/arrow-left.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Head from "next/head";
import favicon from "../../../public/assets/favicon.png";
import metaCard from "../../../public/assets/custodia-metacard.png";

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
          team: string;
        };
      };
    };
    image: {
      data: {
        attributes: {
          url: string;
          name: string;
        };
      };
    };
  };
}

const PatientStories = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const router = useRouter();
  const { category } = router.query;

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!category) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc&filters[category][slug][$eq]=${category}&pagination[page]=${page}&pagination[pageSize]=15`
        );
        const blogsData = response.data.data;

        if (blogsData.length > 0) {
          setBlogs((prevBlogs) => [...prevBlogs, ...blogsData]);
          setCategoryName(
            blogsData[0].attributes.category.data.attributes.name
          );
        } 
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Failed to load blog data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, page]);

  if (loading && blogs.length === 0) {
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
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title> {categoryName} - Custodia Health Blog</title>
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
      <div className="px-5 md:px-32 mt-[50px]">
        <Link href="/blog">
          <div className="flex items-center cursor-pointer">
            <img src={left.src} alt="Back" className="w-5 md:w-[22px]" />
            <p className="ml-1.5 text-[16px] leading-5 md:text-[18px] md:leading-[22.7px] font-medium text-[#476D85]">
              Custodia Blog
            </p>
          </div>
        </Link>
        <h1 className="text-4lg md:text-[42px] leading-[53px] font-bold text-[#002A47] mt-4 md:mt-5">
          {categoryName}
        </h1>
      </div>
      <div className="px-5 md:px-32 mt-[32px] md:mt-[40px] grid md:grid-cols-3 md:grid-rows-1 gap-15 mb-15">
        {blogs.map((blogpost: Blog) => {
          const { id, attributes } = blogpost;
          const imgUrl = attributes.image.data.attributes.url;
          return (
            <div
              className="max-w-[357px] flex flex-col justify-between"
              key={id}
            >
              <div>
                <Link href={`/blog/${attributes.slug}`}>
                  <img
                    src={imgUrl}
                    alt={attributes.image.data.attributes.name}
                    className="cursor-pointer w-full md:w-[357px] md:h-[205.55px] rounded-[20px]"
                  />
                </Link>
                <p className=" text-sm leading-[17px] text-[#4F9EEA] mt-[24px] mb-3">
                  {attributes.category.data.attributes.name}
                </p>
                <Link href={`/blog/${attributes.slug}`}>
                  <p className="text-[#002A47] font-bold text-[22px] leading-[28px] md:leading-[29px]  cursor-pointer">
                    {attributes.title}
                  </p>
                </Link>
              </div>
              <div className="flex mt-3 md:mt-4">
                <img
                  src={image.src}
                  alt="Avatar"
                  className="w-12 rounded-[25px]"
                />
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
        <SustainOutlineButton onClick={loadMorePosts}>
        Show more posts
        </SustainOutlineButton>
      </div>
      <Footer />
    </>
  );
};

export default PatientStories;
