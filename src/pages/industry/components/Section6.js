import React from 'react'
import '../styles/Section6.scss'
import sec6 from '../../../assests/section6.svg'
import Sec6Card from './Sec6Card'
// import css from '../../../assests/css-3 logo.svg'
// import html from '../../../assests/html.svg'
// import javascript from '../../../assests/javascript logo.svg'
// import php from '../../../assests/php2 logo.svg'
// import python from '../../../assests/python-4 logo.svg'
// import abode from '../../../assests/adobe-xd logo.svg'
// import figma from '../../../assests/Figma logo.svg'
// import ubuntu from '../../../assests/Ubuntu logo.svg'
// import bash from '../../../assests/Bash logo.svg'
// import aws from '../../../assests/aws logo.svg'
// import laravel from '../../../assests/Laravel logo.svg'
// import react from '../../../assests/React logo.svg'
// import django from '../../../assests/Django logo.svg'


const Section6 = () => {
  return (
    <div className='section6'>
        <div className="sec6">
            <div className="top-left">
                <h4>scope of program</h4>
                <h2>Here is the list of areas that will be explored in the training.</h2>
            </div>
            <div className="secimg">
                <img src={sec6} alt="" />
            </div>
            <div className="sec6grid">
                <Sec6Card/>    
            </div>
        </div>
        <div className="butt">
            <button>Enroll Now</button>
        </div>
        <hr />
    </div>
  )
}

export default Section6