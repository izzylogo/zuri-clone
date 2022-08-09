import React from 'react'
import '../styles/Footer.scss'
import flogo from '../assest/footerlogo (1).svg'
import fblogo from '../assest/footerfacebook.svg'
import linklogo from '../assest/footerlinkd.svg'
import twitlogo from '../assest/footertwit.png'
import ytlogo from '../assest/footeryoutube.svg'

const Footer = () => {
  return (
    <div className='exp-footer'>
        <div className="footer">
            <div className="fot-top">
                <img src={flogo} alt="" className="logofot" />
                <div className="logos">
                    <img src={fblogo} alt="" />
                    <img src={linklogo} alt="" />
                    <img src={twitlogo} alt="" />
                    <img src={ytlogo} alt="" />
                </div>
            </div>
            <div className="fot-bot">
                <p className="fot-text">
                    © Copyright 2022 ZURI TEAM. All rights Reserved
                </p>
                <p className="fot-text">
                    talent@zuri.team
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer