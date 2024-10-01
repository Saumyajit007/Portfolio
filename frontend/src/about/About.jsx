import React, { useEffect, useRef, useState } from 'react'
import Education from '../components/Education'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from '../components/Experience';
import Contacts from '../components/Contacts';
gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);

function About() {

  const scrollref=useRef()
  const [reSize,setReSize]=useState(window.innerWidth)
  useEffect(()=>{
    let scSize=window.innerWidth
    const reSizeScreen=setInterval(() => {
      if (scSize!=window.innerWidth) {
        scSize=window.innerWidth
        setReSize(scSize)
      }
    }, 300);
    return ()=>{
      clearInterval(reSizeScreen)
    }
  },[])
  useGSAP(()=>{
    gsap.to('.aniscrolls',{
      transform: `translate(-${2*reSize}px)`,
      scrollTrigger: {
          trigger: ".aniscrolls",
          // scroller: ".scr",
          // markers:true,
          start: "top 0%",
          end: "top -150%",
          scrub: 1,
          pin: true,
      }
    })
  },{scope:scrollref,dependencies:[reSize]})


  return (
<div id='scr'className='overflow-x-hidden scroll-smooth' ref={scrollref}>
<div className='aniscrolls min-h-screen flex border-10 border-2 about'>
      <Education/>
      <Experience/>
      <Contacts/>
    </div>
</div>
  )
}

export default About
