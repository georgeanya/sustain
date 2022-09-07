import { useState } from "react";
import sustain from "../assets/sustain.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  color: "#f8f8f8",
  padding: "10px 15px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});


const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
      <nav className="px-5 lg:px-32 pt-5 lg:pt-5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <img
            src={sustain.src}
            className="mr-3  self-center"
            alt="Sustain Logo"
          />

          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            aria-controls="navbar-solid-bg"
            aria-expanded={isToggled}
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li className="mt-2.5 mx-3">
                <a
                  href="#"
                  className="text-sm mx-6 pt-5 mt-5 text-[#002A47] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  // aria-current="page"
                >
                  Benefits
                </a>
              </li>
              <li className="mt-2.5 mx-3">
                <a
                  href="#"
                  className="text-sm mx-6 pt-5 mt-5 text-[#002A47] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li className="mt-2.5 mx-3">
                <a
                  href="#"
                  className="text-sm mx-6 pt-5 mt-5 text-[#002A47] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>
              <li>
                <SustainButton className="text-sm">Get started</SustainButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
