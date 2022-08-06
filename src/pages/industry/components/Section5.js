import React from 'react'
import '../styles/Section5.scss'
import woman from '../../../assests/section5-image.png'
import sec5wire from '../../../assests/section5wire.svg'
import hand from '../../../assests/hand.svg'
import mentor from '../../../assests/mentor.svg'
import practise from '../../../assests/practice.svg'
import games from '../../../assests/games.svg'

const Section5 = () => {
  return (
    <div className='sec-5'>
        <div className="sec5con">
            <div className="left">
                <div className="sec5div">
                    <img src={sec5wire} alt="" className="wi" />
                </div>
                <p className="sm">We will help you get started</p>
                <h3>High quality training with hands-on practice</h3>
                <p className='sm ms'>We give you weekly tasks, ranging from easy to complex, as you progress from stage to stage; making it to the final stage means you are now ready to continue learning and growing independently.</p>
                <button className='sec5-enrol'>Enroll Now</button>
                <div className="sec5grid">
                    <button className="team">
                        <img src={hand} alt="" />
                        Teamwork
                    </button>
                    <button className="mentor">
                        <img src={mentor} alt="" />
                        Mentorship
                    </button>
                    <button className="practise">
                        <img src={practise} alt="" />
                        Practice
                    </button>
                    <button className="fun">
                        <img src={games} alt="" />
                        Fun & Games
                    </button>
                </div>
            </div>
            <div className="right">
                <img src={woman} alt="" className="woman" />
            </div>
        </div>
    </div>
  )
}

export default Section5