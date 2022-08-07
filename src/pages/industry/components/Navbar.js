import React from 'react'
import logo from '../../../assests/train.logo(1).svg'
import thumb from '../../../assests/thumbs.png'
import '../styles/Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar' >
        <div className="nav-contain">
            <img src={logo} alt="" className="logo" />
            <ul>
                <li>About</li>
                <li>Why Us?</li>
                <li>Stacks Covered</li>
                <li>FAQs</li>
            </ul>
            <div className="enroll">
                <img src={thumb} alt="" className="enroll-img" />
                <span>Enroll Now</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar