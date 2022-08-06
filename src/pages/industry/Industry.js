import React from 'react'
import './Industry.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionA from './components/SectionA'
import SectionB from './components/SectionB'
import CardIn from './components/CardIn'
import Section5 from './components/Section5'

const Industry = () => {
  return (
    <div className='industry'>
        <Navbar/>
        <Hero/>
        <SectionA/>
        <SectionB />
        <CardIn/>
        <Section5 />
    </div>
  )
}

export default Industry