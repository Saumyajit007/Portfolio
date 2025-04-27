import React, { useState } from "react";
import EachProjects from "./EachProjects";
import frontendimage from "../assets/frontend-projects.webp";
import portfolio from "../assets/portfolio.webp";
import chat from "../assets/chat-app.webp";
import login from "../assets/login.webp";
import Event from "../assets/eventbooking.webp";
function Projects() {
  const [seeMore, setSeemore] = useState(false);

  const handleSeemore = () => {
    setSeemore(!seeMore);
  };
  const projectDesc = [
    {
      title: "Frontend Projects",
      imagename: frontendimage,
      description:
        "Some of my frontend practice project using HTML CSS & JavaScript",
      projectUrl:
        "https://github.com/Saumyajit007/Saumyajit007-Frontend_Projects",
    },
    {
      title: "Protfolio Projects",
      imagename: portfolio,
      description: "Developed with React, tailwind ,react-router-dom ,GSAP",
      projectUrl: "https://github.com/Saumyajit007/Portfolio",
    },
    {
      title: "Chat-app Projects",
      imagename: chat,
      description:
        "Developed with React, tailwind, redux-toolkit, Express, MongoDB",
      projectUrl: "https://github.com/Saumyajit007/MERN_chat_app",
    },
    {
      title: "login without backend",
      imagename: login,
      description: "Assingnment in SPCL made using TypeScript",
      projectUrl: "https://github.com/Saumyajit007/login_assignment",
    },
    {
      title: "Event booking",
      imagename: Event,
      description: "Assingnment in SPCL made using TypeScript,Full Calender",
      projectUrl:
        "https://github.com/Saumyajit007/Saumyajit007-Frontend_Projects/tree/main/eventmaneger/client",
    },
  ];

  return (
    <div className="py-4">
      <h1 className="text-3xl sm:text-5xl font-semibold uppercase text-center">
        Projects
      </h1>
      {seeMore ? (
        <div className="">
          {[...projectDesc].map((project, index) => {
            return (
              <EachProjects
                key={index}
                imageurl={project.imagename}
                projectname={project.title}
                description={project.description}
                links={project.projectUrl}
              />
            );
          })}
        </div>
      ) : (
        <div className="">
          {[...projectDesc].slice(0, 3).map((project, index) => {
            return (
              <EachProjects
                key={index}
                imageurl={project.imagename}
                projectname={project.title}
                description={project.description}
                links={project.projectUrl}
              />
            );
          })}
        </div>
      )}
      <div className="flex justify-center">
        <button
          onClick={handleSeemore}
          className="px-3 py-2 bg-white rounded-xl font-semibold  active:scale-90 hover:bg-gray-200 transition-all delay-200 ease-out hover:scale-110"
        >
          {seeMore ? "see less" : "see more"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
