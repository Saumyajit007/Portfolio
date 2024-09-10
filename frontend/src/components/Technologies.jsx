import React from 'react'
import TechCard from './TechCard'
import python from "../assets/icons8-python.svg"
import java from "../assets/icons8-java.svg"
import html from "../assets/icons8-html5.svg"
import css from "../assets/icons8-css.svg"
import javascript from "../assets/icons8-javascript.svg"
import react from "../assets/icons8-react-js.svg"
import node from "../assets/icons8-nodejs.svg"
import express from "../assets/icons8-express-js.svg"
import php from "../assets/icons8-php.svg"
import mongo from "../assets/icons8-mongodb.svg"
import mysql from "../assets/mysql-official.svg"
import tailwind from "../assets/icons8-tailwind-css.svg"
import scss from "../assets/scss.svg"
import redux from "../assets/icons8-redux.svg"
function Technologies() {
  return (
    <div className=''>
      <div className='flex justify-center m-8'>
        <h1>TECHNOLOGIES</h1>
      </div>
      <div className='flex flex-wrap max-w-[700px] justify-center mb-16'>
        <TechCard />
        <TechCard imglink={python} altname='python' />
        <TechCard imglink={java} altname='java' />
        <TechCard imglink={html} altname='HTML' />
        <TechCard imglink={css} altname='CSS' />
        <TechCard imglink={tailwind} altname='Tailwind' />
        <TechCard imglink={scss} altname='SCSS' />
        <TechCard imglink={javascript} altname='javascript' />
        <TechCard imglink={react} altname='React.JS' />
        <TechCard imglink={redux} altname='redux'/>
        <TechCard imglink={node} altname='Node.JS' />
        <TechCard imglink={express} altname='Express.JS' />
        <TechCard imglink={php} altname='PHP' />
        <TechCard imglink={mongo} altname='MongoDB' />
        <TechCard imglink={mysql} altname='MySQL' />
      </div>
    </div>
  )
}

export default Technologies
