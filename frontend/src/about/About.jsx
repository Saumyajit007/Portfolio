import React, { useRef } from 'react'
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
  
  useGSAP(()=>{
    gsap.to('.aniscrolls',{
      transform: `translate(-${2*window.innerWidth}px)`,
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
  },{scope:scrollref})
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
