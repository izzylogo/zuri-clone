import React from 'react'
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
                    <li>Home</li>
                    <li>Impact</li>
                    <li>Why us</li>
                </ul>
                <button>Hire talent</button>
            </div>
        </div>
    </div>
  )
}

export default Nav