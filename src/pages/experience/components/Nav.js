import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Nav.scss'
import exlogo from '../assest/Explogo2.svg'

const Nav = () => {
  return (
    <div className='ex-navbar'>
        <div className="ex-nav">
            <div className="ex-img">
                <img src={exlogo} alt="" />
            </div>
            <div className="ex-hire-side">
                <ul>
                    <li>
                        <Link  activeClass="active" to="home" spy={true} smooth={true}  duration={1200}>Home</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="world" spy={true} smooth={true}  duration={1200}>Impact</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="hire" spy={true} smooth={true}  duration={1200}>Why us</Link>
                    </li>
                </ul>
                <button>Hire talent</button>
            </div>
        </div>
    </div>
  )
}

export default Nav