import React from 'react'
import lady from '../../../assests/lady1.png'
import man from '../../../assests/male1.png'
import line from '../../../assests/line.svg'
import wire from '../../../assests/section1wire.svg'
import look from '../../../assests/maleface.svg'
import '../styles/Hero.scss'

const Hero = () => {
  return (
    <div className='in-hero'>
        <div className="inhero-contain">
            <img src={lady} alt="" className="lady" />
            <div className="content">
                <p className="cont">
                    And now your search has ended...
                </p>
                <h2 className="bol">
                    Gain knowledge to help you scale through the tech industry for free.
                </h2>
                <img src={line} alt="" className="lin" />
                <p className="bot-cont">
                    A basic introduction to software development and product design aimed at complete beginners, which anyone can join
                </p>
                <div className="en-btn">
                    <img src={look} alt="" className="look" />
                    <button>Enroll Now</button>
                    <img src={wire} alt="" className="wire" />
                </div>
            </div>
            <img src={man} alt="" className="man" />
        </div>

        <hr />
    </div>
  )
}

export default Hero