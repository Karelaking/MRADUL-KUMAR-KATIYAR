import React from "react";

const PageTemplate = ({ children, id, classes='' }) => {
  return (
    <section
      id={id}
      className={`w-screen min-h-screen h-full sm:h-screen odd:bg-white even:bg-gray-100 ${classes}`}
    >
      {children}
    </section>
  );
};

export { PageTemplate };
