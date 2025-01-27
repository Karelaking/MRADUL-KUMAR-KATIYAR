import React from "react";

const PageTitle = ({ pageTitle }) => {
  return (
    <div>
    <h1 className="text-center w-full font-extrabold text-black text-4xl my-12">
      {pageTitle}
    </h1>
    </div>
  );
};

export {PageTitle};
