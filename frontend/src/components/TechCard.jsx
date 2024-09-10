import React from 'react'
import cprogramme from "../assets/c-program-icon.svg"
function TechCard({imglink=cprogramme,altname="C programme"}) {
  return (
    <div className=' flex flex-col h-[190px] w-[140px] bg-slate-200 m-4 rounded-2xl items-center hover:scale-110 cursor-pointer hover:transition duration-200 ease-in-out'>
      <div className='h-[120px] w-[120px] mt-2 '>
      <img src={imglink} alt={altname} className='m-auto'/>
      </div>
      <h2 className='text-xl text-slate-900 mt-4'>{altname}</h2>
    </div>
  )
}

export default TechCard
