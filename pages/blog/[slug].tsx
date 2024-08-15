import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Footer from "../../components/footer";
import Navbar1 from "../../components/navbar1";
import favicon from "../../public/assets/favicon.png";
import Head from "next/head";
import BlogPost from "../../components/blogPost";

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

interface ArticlesResponse {
  data: Blog[];
}

const BlogPage = ({ blog }: any) => {
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
      <BlogPost blog={blog} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://custodiahealth.com/blog/${blog.attributes.slug}"
            },
            "headline": "${blog.attributes.title}",
            "description": "${blog.attributes.description}",
            "image": "${ImgUrl}",
            "author": {
                "@type": "Person",
                "name": "${blog.attributes.author.data.attributes.name}",
                "url": "https://custodiahealth.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Custodia Health",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://custodiahealth.com/custodia-logo.png"
                }
            },
            "datePublished": "${blog.attributes.publishedAt}",
            "dateModified": "${blog.attributes.modifiedAt}"
          }`,
        }}
      ></script>
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
