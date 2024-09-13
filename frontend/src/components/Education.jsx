import React from 'react'
import certificate from '../assets/fullstack-certificate.png'
import transparentpic from "../assets/transparent.png"
function Education() {
  return (
    <div className='pt-16 sm:pt-20 min-w-[100vw]'>
      <h1 className='text-5xl font-semibold text-center'>Education</h1>
      <div className=' py-[20px] px-[10px]'>
        <div className='font-nameheader font-semibold pb-4 text-2xl sm:text-4xl'>
            <h1>Currently Pursuing : B.Tech CSE (Passout : 2025)</h1>
            <h1>University :Swami Vivekananda University</h1>
        </div>

        <div className='flex sm:justify-around flex-col sm:flex-row'>
          <div className='h-fit w-[350px] sm:h-[450px] sm:w-[500px] p-1 sm:p-6 sm:m-4 m-1 overflow-hidden  rounded-xl shadow-[0px_20px_30px_-10px_rgba(38,57,77,1)] hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px] border-black border-2 sm:border-none'>
            <img src={certificate} alt="certificate" className='w-[150px] mx-auto sm:w-auto'/>
            <h2 className='sm:text-xl font-semibold'>Fullstack Training from Rinex</h2>
            <h2 className='sm:text-xl font-semibold'>Duration:3 months </h2>
            <h2 className='sm:text-xl font-semibold'>Technology : HTML CSS JS and MERN</h2>
          </div>
          <div className='h-fit w-[350px] sm:h-[450px] sm:w-[500px] p-1 sm:p-6 sm:m-4 m-1 overflow-hidden rounded-xl shadow-[0px_20px_30px_-10px_rgba(38,57,77,1)] hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px] border-black border-2 sm:border-none'>
            <img src={transparentpic} alt="certificate" className='object-cover sm:h-[310px] sm:w-[500px] w-[150px] h-[100px] mx-auto'/>
            <h2 className='sm:text-xl font-semibold'>Pursuing Cloudcomputing from NPTEL</h2>
            <h2 className='sm:text-xl font-semibold'>Duration:3 months</h2>
            <h2 className='sm:text-xl font-semibold'>Technology : core concept & AWS/Google cloud</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
