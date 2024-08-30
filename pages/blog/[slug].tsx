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
    publishedAt?: string; // Optional, based on usage
    updatedAt?: string; // Optional, based on usage
    category?: {
      data?: {
        attributes?: {
          name: string;
        };
      };
    };
    author?: {
      data?: {
        attributes?: {
          name: string;
          team?: string; // Optional, based on usage
        };
      };
    };
    seo?: {
      metaTitle?: string;
      metaDescription?: string; // Optional, based on usage
      keywords?: string; // Optional, added to match usage
      shareImage?: {
        data?: {
          attributes?: {
            formats?: {
              small?: {
                url: string;
              };
            };
          };
        };
      };
      metaTwitterImage?: {
        data?: {
          attributes?: {
            formats?: {
              medium?: {
                url: string;
              };
            };
          };
        };
      };
    };
    image?: {
      data?: {
        attributes?: {
          formats?: {
            medium?: {
              url: string;
            };
            small?: {
              url: string;
            };
          };
        };
      };
    };
  };
}



interface ArticlesResponse {
  data: Blog[];
}

const BlogPage = ({ blog }: { blog: Blog | null }) => {
  if (!blog) {
    return (
      <div>
        <p>Blog post not found.</p>
      </div>
    );
  }

  const url = `https://custodiahealth.com/blog/${blog.attributes.slug}`;
  const seoMetaTitle = blog.attributes.seo?.metaTitle || blog.attributes.title; // Fallback to title if metaTitle is not present
  const seoMetaDescription =
    blog.attributes.seo?.metaDescription || blog.attributes.description; // Fallback to description if metaDescription is not present
  const seoKeywords = blog.attributes.seo?.keywords || ""; // Using optional chaining to access keywords
  const shareImageUrl =
    blog.attributes.seo?.shareImage?.data?.attributes?.formats?.small?.url ||
    "";
  const twitterImageUrl =
    blog.attributes.seo?.metaTwitterImage?.data?.attributes?.formats?.medium
      ?.url || "";

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${seoMetaTitle} - Custodia Health`}</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta name="keywords" content={seoKeywords} />
        <meta name="description" content={seoMetaDescription} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="article" property="og:type" />
        <meta content={url} property="og:url" />
        <meta
          content={`${seoMetaTitle} - Custodia Health`}
          property="og:title"
        />
        <meta content={seoMetaDescription} property="og:description" />
        <meta content={shareImageUrl} property="og:image" />
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
          content={`${seoMetaTitle} - Custodia Health`}
        />
        <meta name="twitter:description" content={seoMetaDescription} />
        <meta name="twitter:image" content={twitterImageUrl} />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link href={url} rel="canonical" />
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
                "@id": "${url}"
            },
            "headline": "${blog.attributes.title}",
            "description": "${blog.attributes.description}",
            "image": "${
              blog.attributes.image?.data?.attributes?.formats?.medium?.url ||
              ""
            }",
            "author": {
                "@type": "Person",
                "name": "${
                  blog.attributes.author?.data?.attributes?.name || "Anonymous"
                }",
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
            "dateModified": "${blog.attributes.updatedAt}"
          }`,
        }}
      ></script>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  { blog: Blog | null },
  Params
> = async ({ params }) => {
  const { slug } = params as Params;
  try {
    const { data } = await axios.get<ArticlesResponse>(
      `https://custodia-health-blog.herokuapp.com/api/articles?filters[slug][$eq]=${slug}&populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage`
    );
    const blog = data.data.length > 0 ? data.data[0] : null; // Assuming the API returns an array

    if (!blog) {
      return {
        notFound: true,
      };
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

export default BlogPage;
