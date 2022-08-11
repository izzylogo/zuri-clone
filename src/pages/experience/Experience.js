import React, { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hire from './components/Hire'
import Nav from './components/Nav'
import Talent from './components/Talent'
import World from './components/World'
import './Experience.scss'

const Experience = () => {
  const [mode, setMode] = useState(false)

  const open = () => {
    setMode(true)
  }
  const close = () => {
    setMode(false)
  }

  return (
    <div className='experience'>
        <Nav 
          mode={mode}
          setMode={setMode}
          open={open}
          close={close}
        />
        <Hero/>
        <World/>
        <Talent/>
        <Hire/>
        <Footer />
    </div>
  )
}

export default Experience