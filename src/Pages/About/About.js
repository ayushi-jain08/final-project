import React from 'react'
import MyCard from './MyCard'
import { Slides } from './Slider'
import "./About.scss"

const About = () => {
  return (
    <div className='container-style'>
      <MyCard slides={Slides}/>
    </div>
  )
}

export default About
