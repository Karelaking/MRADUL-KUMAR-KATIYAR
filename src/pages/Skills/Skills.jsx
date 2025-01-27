import React from "react";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import { SkillCard } from "../../components/SkillCard/SkillCard";
import img from "/src/assets/img/skills.png";;

const skillsList = [
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    text: "C",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    text: "Android",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    text: "Android Studio",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    text: "Bash",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
    text: "Blender",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    text: "Bootstrap",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    text: "CSS3",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    text: "Express",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    text: "Flutter",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    text: "Git",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    text: "Github",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    text: "HTML5",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    text: "Java",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    text: "JavaScript",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    text: "Linked",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    text: "Linux",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
    text: "Netlify",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    text: "Npm",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/poetry/poetry-original.svg",
    text: "Poetry",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    text: "Python",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    text: "React",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    text: "Tailwind CSS",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    text: "VS Code",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    text: "SocketIo",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    text: "Redux",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    text: "Vite",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg",
    text: "PyCharm",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    text: "Material UI",
  },
];

const Skills = () => {
  return (
    <PageTemplate id="skills" classes="flex">
      <div className="w-full sm:w-1/2 h-full min-h-screen hidden sm:block">
      <img src={img} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="w-full sm:w-1/2 px-16 h-full min-h-screen flex flex-wrap gap-4 justify-start items-center bg-left-top">
        <h1 className="text-center w-full font-extrabold text-black text-4xl mt-12">
          My Skills
        </h1>
        <div className="w-full max-h-[690px] overflow-hidden overflow-y-scroll grid-cols-2 sm:grid-cols-3 grid gap-6 pb-8">
          {skillsList.map((skill, index) => (
            <SkillCard imgUrl={skill.imgUrl} text={skill.text} key={index} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export { Skills };
