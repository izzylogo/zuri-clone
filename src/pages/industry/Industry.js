import React from 'react'
import './Industry.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionA from './components/SectionA'
import SectionB from './components/SectionB'
import CardIn from './components/CardIn'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Question from './components/Question'
import ProgramS from './components/ProgramS'
import Last from './components/Last'
import Footer from './components/Footer'

const Industry = () => {
  return (
    <div className='industry'>
        <Navbar/>
        <Hero/>
        <SectionA/>
        <SectionB />
        <CardIn/>
        <Section5 />
        <Section6 />
        <Question />
        <ProgramS />
        <Last/>
        <Footer/>
    </div>
  )
}

export default Industry