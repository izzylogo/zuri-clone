import React from 'react'
import '../styles/Hero.scss'
import {Link}  from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-cent">
            <h4 className="h-head">Zuri<span>.</span>Team</h4>
            <h1>learn, build, grow.</h1>
            <p>Unlock your Brilliance with our hands-on <span>beginner</span> and <span>expert training.</span> Zuri Team has been 
            immensely successful in creating a global network of a highly adept intelligent workforce 
            that can help your company achieve their mission-critical <span>projects and goals</span></p>
            <div className="h-buttons">
                <Link className="b1 button" to='/train'>i'm new to the industry</Link>
                <Link className="b2 button"  to='/'>i need industry experience</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero