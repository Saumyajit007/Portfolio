import React from 'react'
import signature from "../assets/signature.png"
import { NavLink } from 'react-router-dom'

function header() {
  return (
    <div className='max-w-full flex justify-between items-center bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 fixed top-0 left-0 right-0 z-[999]
'>
      <div className='mr-1 sm:mr:10 ' >
        <img src={signature} alt="sign" className='h-16 sm:h-20 sm:ml-10 w-auto scale-150'/>
      </div>
      <div>
        <NavLink to="/about" className={({isActive})=>`mr-6 text-xl sm:text-3xl capitalize py-1 px-5 rounded-3xl ${isActive? 'bg-slate-600 text-slate-300':' bg-slate-400'} hover:underline hover:decoration-white hover:text-white transition duration-700 ease-in-out`}>about</NavLink>
      </div>
    </div>
  )
}

export default header
