import React from 'react'
import EachProjects from './EachProjects'
import frontendimage from "../assets/frontend-projects.png"

function Projects() {
  const projectDesc = [
    {
      title:"Frontend Projects",
      imagename:frontendimage,
      description:"Some of my frontend practice project using HTML CSS & JavaScript"
    }]
  return (
    <div className='py-4'>
      <h1 className='text-3xl sm:text-5xl font-semibold uppercase text-center'>Projects</h1>
      <div className=''>
          {
            projectDesc.map((project,index)=>{
              return <EachProjects key={index} imageurl={project.imagename} projectname={project.title} description={project.description}/>
            })
          }
          <EachProjects/>
          <EachProjects/>
          <EachProjects/>
      </div>
    </div>
  )
}

export default Projects
