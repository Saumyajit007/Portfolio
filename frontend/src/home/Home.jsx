import React, { useEffect, useState, useRef } from 'react'
import mypic from "../assets/resume pic.jpg"
import { Link } from 'react-router-dom';
import { RiGithubFill, RiMailLine, RiLinkedinLine, RiDownloadLine } from "@remixicon/react";
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Home() {

  const [tagLine, setTagLine] = useState("")
  const tagArr = ["Fullstack Developer","Frontend Devoloper", "Quick Learner", "Team Player" ,"Tech Enthusiast"]
  const tagref = useRef()

  useEffect(() => {
    let changeIndex = 0
    let textStatus = true
    const changeName = () => {
      if (changeIndex < tagArr.length && textStatus) {
        console.log(`hi ${changeIndex}`)
        setTagLine(tagArr[changeIndex])
        changeIndex = (changeIndex + 1) % tagArr.length
        setTimeout(changeName, 6000);
      }
    }
    changeName()

    return () => {
      textStatus = false
      console.log(textStatus)
    }
  }, [])

  useGSAP(() => {
    gsap.from(".a", {
      duration: 1,
      stagger: 0.2,
      opacity: 0,
      scale: 0,
    })
  }, { scope: tagref, dependencies: [tagLine] })

  return (
    <div className='scroll-smooth' >
      <div className='h-screen max-w-screen flex flex-col justify-center items-center lg:flex-row-reverse sm:mr-6 panel'>
        <div className='p-4 border-black  border-4 rounded-full'>
          <div className='w-80 h-80 border-2 border-black overflow-hidden rounded-full lg:w-100 lg:h-100'>
            <img src={mypic} alt="my picture" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center font-ramaraja text-5xl lg:text-7xl lg:mr-6 lg:items-start lg:max-w-[90vh] sm:ml-6' ref={tagref}>
          <h1>Hey, I am</h1>
          <h1 className=''>SAUMYAJIT PAUL</h1>
          <h1 className='font-Teko tagline bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text text-transparent'>{tagLine.split('').map((element, index) => {
            return <span className='a' key={index}>{element}</span>
          })}</h1>
          <div className='flex flex-wrap justify-center'>
            <p className='font-Bodoni font-semibold hidden md:inline-block text-xl'>I'm a Computer Science Engineering student with a strong enthusiasm for coding, and I also possess effective communication and problem-solving abilities.</p>
          </div>
          <div className='flex gap-4 mt-3 flex-nowrap items-center'>
            <Link to="https://github.com/Saumyajit007?tab=repositories" target='blank'>        <RiGithubFill
              size={38}
              className="my-icon"
            /></Link>
            <Link to="mailto:saumyajitpaul7@gmail.com" target='blank'>        <RiMailLine
              size={38}
              className="my-icon"
            /></Link>
            <Link to="https://www.linkedin.com/in/saumyajit-paul/" target='blank'>        <RiLinkedinLine
              size={38}
              className="my-icon"
            /></Link>

            <Link to="https://drive.google.com/file/d/1Auy7shxW5lTOYY2yjiae5FFzO51LbndZ/view?usp=sharing" target='blank' className='text-2xl w-[110px] flex flex-nowrap bg-slate-800 text-slate-200 px-1 rounded-xl hover:scale-105 pr-2 '><RiDownloadLine
              size={32}
              className='my-icon mx-1'
            /><span>resume</span></Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center text-3xl sm:text-5xl font-semibold bg-[#004D43] rounded-t-3xl text-slate-200 panel'>
        <Technologies />
      </div>
      <div className='bg-[#CDEA68] panel'>
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Home
