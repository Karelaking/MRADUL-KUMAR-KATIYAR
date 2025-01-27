import React from 'react'
import {PageTemplate} from '../../components/PageTemplate/PageTemplate.jsx';

const Projects = () => {
  return (
    <PageTemplate classes="flex">
      <div className="w-full sm:w-1/2 px-16 h-full min-h-screen flex flex-wrap gap-4 justify-start items-center">
        <h1 className="text-center w-full font-extrabold  text-black text-4xl my-12">
          My Projects
        </h1>
      </div>
      <div className="w-full sm:w-1/2 h-full min-h-screen hidden sm:block bg-[url('./src/assets/img/projects.png')] bg-cover"></div>
    </PageTemplate>
  );
}

export {Projects};
