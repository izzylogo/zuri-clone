import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Talent from './components/Talent'
import World from './components/World'
import './Experience.scss'

const Experience = () => {
  return (
    <div className='experience'>
        <Nav/>
        <Hero/>
        <World/>
        <Talent/>
    </div>
  )
}

export default Experience