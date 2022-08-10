import React from 'react'
import '../styles/Hero.scss'
import line from '../assest/thick2.svg'
import line2 from '../assest/line1.svg'
import heroImg from '../assest/Exsection1.png'

const Hero = () => {
  return (
    <div className='ex-hero' id='home'>
        <div className="exp-hero">
          <div className="left">
            <h1>Vetted and Trusted <span>talents</span></h1>
            <img src={line} alt="" />
            <h3>At Zuri Team, we train, test and place talent in various industries. We have access to the best pool of skills in the tech Industry.</h3>
            <div className="buttons">
              <button>Hire Talent</button>
              <button>Join Talent pool</button>
            </div>
          </div>
          <div className="right">
            <img src={heroImg} alt="" className='mii' />
            <img src={line2} alt="" className='linee' />
          </div>
        </div>
    </div>
  )
}

export default Hero