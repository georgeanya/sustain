import Footer from "../components/footer";
import Navbar1 from "../components/navbar";
import favicon from "../public/assets/favicon.png";
import webinar from "../public/assets/webinar.svg";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import axios from "axios";

import lock from "../public/assets/lock.svg";
import icon from "../public/assets/custodia-icon.svg";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

interface IState {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country_code: string;
  };
}

const url = "https://getsustainapp.herokuapp.com/v1/consult";

const Webinar = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      country_code: "234",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const setIsSuccessFunc = () => {
    setIsSuccess(!isSuccess);
  };

  const setIsErrorFunc = () => {
    setIsError(!isError);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoadingFunc();
    axios
      .post(url, {
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        email: state.user.email,
        phone_number: state.user.phone_number?.slice(1),
        country_code: state.user.country_code,
      })
      .then((res) => {
        if (
          res.data.message === "user previously subscribed" ||
          "user subscribed successfully"
        ) {
          setIsSuccessFunc();
        } else {
          setIsErrorFunc();
        }
      })
      .catch((error) => {
        setIsErrorFunc();
        console.log(error);
      });
  };

  const setIsLoadingFunc = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>How to Put Type 2 Diabetes in Remission - Custodia Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, reverse diabetes, high cholesterol, lifebox labs, hypertension"
        />
        <meta name="description" content=" Join our webinar, 'How to Put Type 2 Diabetes in Remission', to learn effective strategies for reversing type 2 diabetes through lifestyle changes. Discover actionable tips and expert insights!" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta
          content="https://custodiahealth.com/privacy-policy"
          property="og:url"
        />
        <meta content="How to Put Type 2 Diabetes in Remission - Custodia Health" property="og:title" />
        <meta
          content=" Join our webinar, 'How to Put Type 2 Diabetes in Remission', to learn effective strategies for reversing type 2 diabetes through lifestyle changes. Discover actionable tips and expert insights!"
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
        <meta name="twitter:title" content="How to Put Type 2 Diabetes in Remission - Custodia Health" />
        <meta
          name="twitter:description"
          content=" Join our webinar, 'How to Put Type 2 Diabetes in Remission,' to learn effective strategies for reversing type 2 diabetes through lifestyle changes. Discover actionable tips and expert insights!"
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
        <link
          href="https://custodiahealth.com/privacy-policy"
          rel="canonical"
        />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="facebook-domain-verification"
          content="nkzhwppp6o24gs2ndw0p0pjyfvijts"
        />
      </Head>
      <Navbar1 />
      <div className="px-5 lg:px-32 lg:pt-18 pt-[50px] pb-20 lg:pb-36 flex flex-col lg:flex-row lg:justify-between bg-[#F0F7FF]">
        <div className="max-w-[511px] md:mt-5 mb-15 md:mb-0">
          <p className="text-[#002A47] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] font-medium">
            FREE WEBINAR
          </p>
          <p className="text-[#002A47] text-[34px] leading-[43px] md:text-[48px] md:leading-[60px] font-bold mt-2 md:mt-3 mb-[24px]">
            How to put type 2 diabetes in remission
          </p>

          <div className="text-[#476D85] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px]">
            <p className="my-[24px]">
              Learn how using food as medicine can help you reduce medication
              use and even reverse type 2 diabetes.
            </p>
            <p>In this webinar, you will learn:</p>
            <ul className=" list-disc ml-5 md:ml-6 my-[24px]">
              <li>What the root cause of type 2 diabetes is</li>
              <li>How to treat the root cause of type 2 diabetes</li>
              <li>How food can address the root cause of type 2 diabetes</li>
            </ul>
            <p>
              You will also have the opportunity to ask questions during our
              live Q&A session!
            </p>
          </div>
        </div>
        <div className={isSuccess || isError ? "hidden" : "block"}>
          <div className="bg-[#FFFFFF] rounded-[20px] px-5 md:px-8 py-[40px] md:py-[52px] md:w-[460px]">
            <h1 className="leading-7  md:text-[24px] md:leading-[30px] text-1lg font-bold text-[#002A47]">
              Book your seat now
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="md:grid grid-cols-2 gap-5 mt-7">
                <div className="mb-5 md:mb-3">
                  <TextField
                    id="outlined-search"
                    type="text"
                    name="first_name"
                    value={state.user.first_name}
                    onChange={handleChange}
                    className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
                    fullWidth
                    label="First name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <TextField
                    id="outlined-search"
                    type="text"
                    name="last_name"
                    value={state.user.last_name}
                    onChange={handleChange}
                    className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
                    fullWidth
                    label="Last name"
                    required
                  />
                </div>
              </div>

              <div className="flex mb-5">
                <img src={lock.src} alt="Icon" />
                <p className="md:text-[13px] leading-4 text-xs text-[#476D85] ml-1">
                  Your information will never be shared with anyone
                </p>
              </div>
              <div className="mb-5">
                <TextField
                  id="outlined-search"
                  type="email"
                  name="email"
                  value={state.user.email}
                  onChange={handleChange}
                  className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
                  fullWidth
                  label="Email address"
                  required
                />
              </div>
              <div className="mb-10">
                <TextField
                  id="outlined-search"
                  type="tel"
                  name="phone_number"
                  value={state.user.phone_number}
                  onChange={handleChange}
                  className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full "
                  fullWidth
                  label="Phone number"
                  required
                />
                <p className="text-[#476D85] text-[12px] md:text-[13px] leading-4 mt-[12px]">
                  Please enter a valid WhatsApp phone number
                </p>
              </div>

              <div className="">
                {isLoading ? (
                  <SustainButton
                    className="self-center text-sm md:text-base font-medium"
                    type="submit"
                  >
                    <p>Book a seat</p>
                  </SustainButton>
                ) : (
                  <SustainButton
                    className="self-center text-sm md:text-base font-medium disabled:opacity-65"
                    type="submit"
                  >
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 mr-2 text-gray-200 animate-spin fill-[#4F9EEA]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="white"
                        />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </SustainButton>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className={isSuccess ? "block text-center" : "hidden"}>
          <div className="bg-[#FFFFFF] rounded-[20px] px-5 md:px-8 py-[64px] md:py-[80px] md:w-[460px] max-h-[456px]">
            <div className="flex justify-center mb-[24px]">
              <img src={webinar.src} alt="" />
            </div>
            <p className="text-[#002A47] md:text-[28px] md:leading-[35px] text-[24px] leading-[30px] font-medium">
              You&apos;re all set
            </p>
            <p className="text-[#476D85] md:text-[18px] md:leading-[24px] text-[16px] leading-[22px] mx-3.5 mt-4 mb-[24px]">
              You&apos;ll receive a confirmation email shortly and a brief
              reminder before the webinar
            </p>
            <Link href="https://chat.whatsapp.com/FRbf5Bs3IgE77YDfbZUV1U">
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
              >
                Join our WhatsApp community
              </SustainButton>
            </Link>
          </div>
        </div>
        <div className={isError ? "block text-center" : "hidden"}>
          <div className="bg-[#FFFFFF] rounded-[20px] px-5 md:px-8 py-[64px] md:py-[80px] md:w-[460px] max-h-[456px]">
            <div className="flex justify-center mb-[24px]">
              <img src={webinar.src} alt="" />
            </div>
            <p className="text-[#002A47] md:text-[28px] md:leading-[35px] text-[24px] leading-[30px] font-medium">
              An error occurred
            </p>
            <p className="text-[#476D85] md:text-[18px] md:leading-[24px]  text-[16px] leading-[22px] mx-3.5 mt-4 mb-[24px]">
              Please make sure you entered a valid email and phone number and
              try again
            </p>
            <SustainButton
              className="self-center text-sm md:text-base font-medium"
              type="submit"
              onClick={() => {
                setIsErrorFunc();
                setIsLoadingFunc();
              }}
            >
              Try Again
            </SustainButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webinar;
