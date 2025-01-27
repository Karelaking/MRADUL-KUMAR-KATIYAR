import React from 'react'

const AboutCard = ({title, content}) => {
  return (
    <div
      className="bg-slate-200 sm:h-[500px] flex flex-col items-center shadow-md text-center mx-8 sm:mx-4 my-5 rounded sm:px-12 sm:py-6 px-6 py-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h1 className="font-neue text-3xl sm:mt-5 sm:text-3xl">{title}</h1>
      <p className="font-roboto text-md my-6">{content}</p>
    </div>
  );
}

export default AboutCard
