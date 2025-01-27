import React from "react";

const SkillCard = ({ imgUrl, text }) => {
  return (
    <div
      className="size-[100px] sm:size-[120px] border-2 bg-gray-100 m-auto rounded-xl shadow-md flex flex-col justify-evenly items-center"
      // data-aos="fade-up"
      // data-aos-delay="200"
    >
      <img src={imgUrl} className="size-[35px] mx-auto" />
      <h1 className="text-center font-semibold px-2 text-[85%] font-roboto sm:text-[100%] break-words">
        {text}
      </h1>
    </div>
  );
};

export { SkillCard };
