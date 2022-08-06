import React from 'react'
import '../styles/ProgramS.scss'
import arro from '../../../assests/section7wire.svg'
import star from '../../../assests/Star1.svg'
import move from '../../../assests/move.svg'
import hour from '../../../assests/hour.png'
import time from '../../../assests/time.png'
import slant from '../../../assests/slant.png'
import {BsInfoCircleFill} from 'react-icons/bs'


const ProgramS = () => {
  return (
    <div className='programs'>
        <div className="program">
            <div className="top-ar">
                <img src={arro} alt="" />
            </div>
            <div className="right-ar">
                <img src={star} alt="" />
            </div>
            <div className="header">
                <h3>Structure</h3>
                <h1>Program Structure</h1>
                <p>There are 2 broad paths in this program based on your availability.</p>
            </div>
            <div className="program-card">
                <div className="move-icon">
                    <img src={move} alt="" />
                </div>
                <div className="main-card">
                    <div className="cover">
                        <h1>Full-time</h1>
                        <p>Requires at least 25 hours weekly on program content.</p>
                        <div className="available">
                            <h3>Available Tracks:</h3>
                            <ul>
                                <li>Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS, JavaScript) & DevOps</li>
                                <li>Design: Figma, Adobe XD</li>
                            </ul>
                        </div>
                        <div className="phase">
                            <h3>Phases:</h3>
                            <ul>
                                <li>Training Phase</li>
                                <li>Project Phase</li>
                            </ul>
                        </div>
                        <div className="post-program">
                            <h3>Post Program:</h3>
                            <ul>
                                <li>Certification of Attendance</li>
                                <li>Zuri Internship <BsInfoCircleFill color='red'/></li>
                                <li>Laptop Reward (upgrade or new one) <BsInfoCircleFill color='red'/> </li>
                                <li>Job Placement  <BsInfoCircleFill color='red'/></li>
                                <li>Zuri Talent Pool</li>
                                <li>More Training:  <BsInfoCircleFill color='red' /></li>
                                <p>Interview Prep</p>
                                <p>Algorithms & Data Structure</p>
                                <p>Freelance Setup & Training</p>
                                <p>LinkedIn Optimization</p>
                                <p>CV Review</p>
                            </ul>
                        </div>
                    </div>
                    <div className="hour-mg">
                        <img src={hour} alt="" />
                    </div>
                </div>
                <div className="main-card nd">
                    <div className="cover">
                        <h1>Part-time</h1>
                        <p>Requires at least 11 hours weekly on program content.</p>
                        <div className="available">
                            <h3>Available Tracks:</h3>
                            <ul>
                                <li>Frontend: <br /> HTML, CSS, JavaScript</li>
                                <li>Backend: Can only select one backend language <br /> Python, <br /> PHP, <br /> JavaScript</li>
                                <li>Design: Figma</li>
                            </ul>
                        </div>
                        <div className="phase">
                            <h3>Phases:</h3>
                            <ul>
                                <li>Training Phase</li>
                            </ul>
                        </div>
                        <div className="post-program">
                            <h3>Post Program:</h3>
                            <ul>
                                <li>Certification of Attendance</li>
                                <li>Zuri Internship</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tim">
                        <img src={time} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="slant">
            <img src={slant} alt="" className="sla" />
        </div>
    </div>
  )
}

export default ProgramS