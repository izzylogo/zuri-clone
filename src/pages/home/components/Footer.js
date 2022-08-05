import React from 'react'
import logo from '../../../assests/zuri-logo-full.svg'
import '../styles/Footer.scss'
import twit from '../../../assests/twitter.png'
import fb from '../../../assests/fb.png'
import ig from '../../../assests/IG.png'
import ins from '../../../assests/in.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="f-contain">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-2">
                <ul>
                    <li className='top'>Links</li>
                    <li>Store</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="flex-3">
                <ul>
                    <li className='top'>Contact</li>
                    <li>8 Jubliee-CMD Road, Magodo, <br /> Lagos State</li>
                    <li>hello@zuri.team</li>
                </ul>
            </div>
            <div className="flex-4">
                <h3>Follow us</h3>
                <ul>
                    <li><img src={fb} alt="" /></li>
                    <li><img src={twit} alt="" /></li>
                    <li><img src={ig} alt="" /></li>
                    <li><img src={ins} alt="" /></li>
                </ul>
            </div>
        </div>

        <hr />

        <h4>&copy; 2022 ZURI TEAM</h4>
    </div>
  )
}

export default Footer