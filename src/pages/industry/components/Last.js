import React from 'react'
import '../styles/Last.scss'
import slant from '../../../assests/slant.png'
import bend from '../../../assests/bend1.svg'
import round from '../../../assests/round.svg'
import curve2 from '../../../assests/curve2.svg'
import main from '../../../assests/mains.png'


const Last = () => {
  return (
    <div className='last'>
        <div className="las">
            <div className="las-top">
                <img src={slant} alt="" />
            </div>
            <div className="last-body">
                <div className="spiral">
                    <img src={round} alt="" className="round" />
                </div>
                <div className="bend">
                    <img src={bend} alt="" className="round" />
                </div>
                <div className="last-det">
                    <p>Get Started</p>
                    <h2>Break into the tech industry like a Pro</h2>
                </div>
                <div className="last-btn">
                    <button href="" className='last-li'>
                        Enroll Now
                    </button>
                </div>
                <div className="butt-img">
                    <div className="first-img">
                        <img src={curve2} alt="" />
                    </div>
                    <div className="second-img">
                        <img src={main} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Last