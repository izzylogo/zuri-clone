import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hire from './components/Hire'
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
        <Hire/>
        <Footer />
    </div>
  )
}

export default Experience