import React from 'react'
import './Industry.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionA from './components/SectionA'

const Industry = () => {
  return (
    <div className='industry'>
        <Navbar/>
        <Hero/>
        <SectionA/>
    </div>
  )
}

export default Industry