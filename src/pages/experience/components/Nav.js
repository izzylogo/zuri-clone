import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Nav.scss'
import exlogo from '../assest/Explogo2.svg'
import Modal from './Modal'


const Nav = ({mode, setMode, open, close}) => {
  return (
    <div className="navv">
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
                    <button onClick={open}>Hire talent</button>
                </div>
            </div>
        </div>
        <Modal
            mode={mode}
            setMode={setMode}
            open={open}
            close={close}
        />
    </div>
  )
}

export default Nav