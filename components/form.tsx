import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import axios from "axios";
import StartError from "./startError";
import StartSuccess from "./startSuccess";
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

const Form = () => {
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
    <div className="max-w-m mx-5 md:mx-auto mt-10 md:mt-[75px]">
      <div className={isSuccess || isError ? "hidden" : "block"}>
        <div className="flex justify-center">
          <img src={icon.src} alt="Icon" className="w-[60px] md:w-[70px]" />
        </div>
        <h1 className="mt-[15px] leading-7  md:text-2xl md:leading-9 text-1lg text-center font-bold text-[#002A47]">
          Join Custodia Health
        </h1>
        <p className="mt-2.5 md:px-6 text-base md:text-lg leading-6 font-normal text-center text-[#476D85]">
          We just need a bit of information to get you started.
        </p>
        {/* <div className="bg-[#324967] md:p-5 p-4 rounded-lg mt-8 mb-9">
          <div className="flex justify-between">
            <p className="text-white text-sm md:text-base md:leading-5">
              Consultation fee
            </p>
            <p className="text-white text-sm md:text-base md:leading-5 font-medium">
              NGN 3,000
            </p>
          </div>
          <div className="flex justify-between md:mt-1.5">
            <p className="text-[#CCD7E6] md:text-[13px] text-xs md:leading-4">
              70% OFF
            </p>
            <p className="text-[#CCD7E6] md:text-[13px] text-xs md:leading-4  line-through">
              NGN 10,000
            </p>
          </div>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="mb-2.5">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-[#002A47]"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                value={state.user.first_name}
                onChange={handleChange}
                className="border h-12 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="mb-2.5">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-[#002A47]"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                value={state.user.last_name}
                onChange={handleChange}
                className="border h-12 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="flex mb-7">
            <img src={lock.src} alt="Icon" />
            <p className="md:text-[13px] leading-4 text-xs text-[#476D85] ml-1">
              Your information will never be shared with anyone
            </p>
          </div>
          <div className="mb-7">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#002A47]"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={state.user.email}
              onChange={handleChange}
              className="border h-12 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-[#002A47]"
            >
              Nigerian WhatsApp phone number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={state.user.phone_number}
              onChange={handleChange}
              className="border h-12 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder=""
              required
            />
            <p className="text-[#476D85] text-[12px] md:text-[13px] leading-4 mt-[10px]">
              Enter your Nigerian WhatsApp phone number eg. 08012345678
            </p>
          </div>
          <div className="bg-[#EEF3F6] p-4 mt-10 md:mt-11 mb-5 md:mb-6 rounded-lg">
            <p className="text-[#476D85] text-xs md:text-sm">
              By filling out this form, you agree to Custodia Health’s{" "}
              <a
                className="text-[#4F9EEA] underline font-medium"
                href="https://priv-health.notion.site/Terms-of-use-254e525466a3493687d94fd671d93ad8"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                className="text-[#4F9EEA] underline font-medium"
                href="https://priv-health.notion.site/Privacy-policy-2f70cbb81ab843ca920e87d2b32caa37"
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="mb-16 md:mb-36">
            {isLoading ? (
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
              >
                <p>Get started</p>
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
      <div className={isSuccess ? "block" : "hidden"}>
        <StartSuccess />
      </div>
      <div className={isError ? "block" : "hidden"}>
        <StartError toggle={setIsErrorFunc} toggleFav={setIsLoadingFunc} />
      </div>
    </div>
  );
};

export default Form;
