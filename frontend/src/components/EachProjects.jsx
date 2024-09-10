import React, { useState } from 'react'
import images from "../assets/frontend-projects.png"
import { Link } from 'react-router-dom'
Link
function EachProjects({ imageurl = images, projectname = "Frontend Projects", description = "Some of my frontend practice project using HTML CSS & JavaScript",links="https://github.com/Saumyajit007/Saumyajit007-Frontend_Projects"}) {

  const [onHover, setOnHover] = useState(false)
  return (
    <div className='h-fit max-w-screen my-[20px] mx-[15px] bg-[rgb(202,249,239)] shadow-md hover:scale-105 rounded-2xl cursor-pointer overflow-hidden relative project sm:my-[40px] sm:mx-[30px] lg:max-w-[60%] lg:mx-auto'>
      <Link to={links} >
        <div className='flex justify-center flex-col pb-1 sm:flex-row '>

          <div className='h-[160px] w-fit overflow-hidden m-2 rounded-lg sm:h-[200px] sm:w-[310px] md:min-w-[45%] md:h-[20%]'>
            <img src={imageurl} alt={projectname} className='' />
          </div>

          <div className='flex flex-wrap flex-col'>
            <h2 className='text-xl font-medium sm:text-3xl sm:mt-2 sm:underline md:text-4xl'>{projectname}</h2>
            <div className='text-sm text-justify mx-1 mb-2 sm:mt-1'>
              <p className='text-wrap sm:text-lg sm:font-medium md:text-xl'>{description}</p>
            </div>
          </div>

        </div>
      </Link>
      <div className='works'>
        <h1 className='text-3xl'>view...</h1>
      </div>
    </div>
  )
}

export default EachProjects;


