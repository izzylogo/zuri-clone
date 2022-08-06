import React from 'react'
import '../styles/SectionB.scss'
import sec3 from '../../../assests/section3wire.svg'
import star from '../../../assests/Star.png'

const SectionB = () => {
  return (
    <div className='sectionB'>
        <div className="secB">
            <div className="top3">
                <img src={sec3} alt="" className="sec3wire" />
                <div className="write3">
                    <p>Why Zuri Training?</p>
                    <h2>Here at Zuri, you gain access to enough knowledge to introduce and aid your success in the tech industry.</h2>
                </div>
            </div>
            <div className="side3">
                <img src={star} alt="" className="star" />
            </div>
        </div>
    </div>
  )
}

export default SectionB