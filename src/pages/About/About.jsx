import React from "react";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import AboutCard from "../../components/AboutCard/AboutCard";
const aboutInfo = [
  {
    title: "🌟 Who I Am",
    content:
      "I am Mradul Kumar Katiyar, a passionate programmer and tech enthusiast from Kanpur, Uttar Pradesh, India. My journey began with a deep curiosity for technology, which transformed into a drive to create innovative solutions. I thrive on combining creativity with logic to solve real-world challenges, constantly pushing the boundaries of what’s possible. ✨💡",
  },
  {
    title: "💻 What I Am Doing",
    content:
      "Right now, I am dedicated to building cutting-edge web applications 🌐, developing CLI tools 🔧, and creating Python libraries 📚 that simplify workflows for developers. Alongside these projects, I’m exploring scalable backend systems 🖥️, mastering modern tech stacks 💻, and engaging with the global developer community 🌍 to share and learn. Every step I take is focused on growth 🚀 and contributing meaningful solutions to the tech ecosystem.",
  },
  {
    title: "🚀 What I Will Do",
    content:
      "Looking ahead, I envision a future where I develop impactful frameworks 🔨, design tools that empower others 🛠️, and tackle emerging challenges in fields like AI 🤖, blockchain 🔗, and automation ⚙️. My ultimate goal is to make a lasting difference 🌍 in the world  projects that redefine boundaries and possibilities.",
  },
];
const About = () => {
  return (
    <PageTemplate id="about" classes="flex flex-col items-center">
      <>
        <h1 className="text-center w-full font-extrabold  text-black text-4xl my-12">
          About Me
        </h1>
        <div className="flex flex-wrap sm:flex-nowrap sm:px-12">
          {aboutInfo.map((info, index) => (
            <AboutCard key={index} title={info.title} content={info.content} />
          ))}
        </div>
      </>
    </PageTemplate>
  );
};

export { About };
