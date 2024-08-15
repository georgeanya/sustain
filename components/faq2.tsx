import React from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";

const FAQ2 = ({ faq, index, toggleFAQ }: any) => {
  return (
    <div>
      <div
        className="flex justify-between"
        onClick={() => toggleFAQ(index)}
        key={index}
      >
        <div className="self-center">
          <p className="text-lg leading-6 md:text-1xl md:leading-8 text-[#002A47] font-medium">
            {faq.question}
          </p>
          {faq.open ? (
            <p className="text-base leading-6 md:text-2lg text-[#002A47] mt-2 md:my-6">
              {faq.answer}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="self-start min-w-fit cursor-pointer h-4 md:h-5">
          {faq.open ? (
            <img
              className="ml-6 flex self-center w-4 md:w-5 md:ml-10 mt-3.5"
              src={minus.src}
              alt="Icon"
            />
          ) : (
            <img
              className="ml-6 self-center w-4 md:w-5 md:ml-10 mt-1"
              src={plus.src}
              alt="Icon"
            />
          )}
        </div>
      </div>
      <hr className="my-6 md:my-8 mb-6 md:mb-8" />
    </div>
  );
};

export default FAQ2;
