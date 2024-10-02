import React from 'react'
import EachProjects from './EachProjects'
import frontendimage from "../assets/frontend-projects.png"
import portfolio from "../assets/portfolio.png"
import chat from "../assets/chat-app.png"

function Projects() {
  const projectDesc = [
    {
      title: "Frontend Projects",
      imagename: frontendimage,
      description: "Some of my frontend practice project using HTML CSS & JavaScript",
      projectUrl:"https://github.com/Saumyajit007/Saumyajit007-Frontend_Projects"
    },
    {
      title: "Protfolio Projects",
      imagename: portfolio,
      description: "Developed with React, tailwind ,react-router-dom ,GSAP",
      projectUrl:"https://github.com/Saumyajit007/Portfolio"
    },
    {
      title: "Chat-app Projects",
      imagename: chat,
      description: "Developed with React, tailwind, redux-toolkit, Express, MongoDB",
      projectUrl:"https://github.com/Saumyajit007/Chat-app"
    },
  ]
  return (
    <div className='py-4'>
      <h1 className='text-3xl sm:text-5xl font-semibold uppercase text-center'>Projects</h1>
      <div className=''>
        {
          projectDesc.map((project, index) => {
            return <EachProjects key={index} imageurl={project.imagename} projectname={project.title} description={project.description} links={project.projectUrl}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects