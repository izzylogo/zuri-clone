import React from 'react'
import '../styles/Footer.scss'
import logo from '../../../assests/train.logo(1).svg'
import fb from '../../../assests/facebookRed.svg'
import linkd from '../../../assests/linkdRed.svg'
import twit from '../../../assests/twitterRed.svg'
import yt from '../../../assests/youtubeRed.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="foot">
            <div className="logos">
                <div className="fflogo">
                    <img src={logo} alt="" />
                </div>
                <div className="sflogo">
                    <div className="lastli">
                        <img src={fb} alt="" />
                        <img src={linkd} alt="" />
                        <img src={twit} alt="" />
                        <img src={yt} alt="" />
                    </div>
                </div>
            </div>
            <div className="below">
                <p className="footer-text">
                    {/* <hr /> */}
                    © 2022 Zuri Training
                </p>
                <div className="side-footer">
                    <p>Privacy Policy</p>
                    <p>Ingressive For Good</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer