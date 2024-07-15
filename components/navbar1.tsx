import { useState } from "react";
import custodia from "../public/assets/custodia.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import NavbarMenu from "./navbarMenu";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  fontSize: "12px",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const Navbar1 = () => {
  const [isToggled, setIsToggled] = useState(true);
  const handleToggleFunc = () => {
    setIsToggled(!isToggled);
    // console.log("isToggle Clicked and is ", isToggled);
  };
  return (
    <div>
      <div className={isToggled ? "hidden" : "block lg:hidden"}>
        <NavbarMenu handleToggle={handleToggleFunc} />
      </div>
      <div className="px-5 lg:px-32 py-5 ">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <a>
                {" "}
                <img
                  src={custodia.src}
                  className="mr-3 cursor-pointer self-center"
                  alt="Custodia Logo"
                />
              </a>
            </Link>

            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden"
              aria-controls="navbar-solid-bg"
              onClick={handleToggleFunc}
            >
              <span className="sr-only">Open main menu</span>
              {isToggled ? (
                <svg
                  className="w-6 h-6"
                  aria-hidden="false"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {/* <li className="mt-3.5 mx-5 ">
                  <Link
                    href="/404"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                    // aria-current="page"
                  >
                    <a className="text-[#002A47]">For health plans</a>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 ">
                  <Link
                    href="/404"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <a className="text-[#002A47]">For doctors</a>
                  </Link>
                </li> */}
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/healthcare-providers"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <a className="text-[#002A47]">For healthcare providers</a>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/pricing"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <a className="text-[#002A47]">Pricing</a>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/blog"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded hover:text-blue-700 md:p-0 "
                  >
                    <a className="text-[#002A47]">Blog</a>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/research"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <a className="text-[#002A47]">Research</a>
                  </Link>
                </li>
                <li className="ml-5">
                  <Link href="/start">
                    <a>
                      <SustainButton className="text-sm">
                        Get started
                      </SustainButton>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar1;
