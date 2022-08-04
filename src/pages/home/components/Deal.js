import React from 'react'
import '../styles/Deal.scss'
import left from '../../../assests/left_1.png'
import right from '../../../assests/right_1.png'

const Deal = () => {
  return (
    <div className='deal'>
        <div className="h-head">
            <h6 className='d-h'>BY ZURI Team</h6>
            <h3 className="h-bot">We cater for every level of <br/> expertise and need in the industry.</h3>
        </div>
        <div className="backimage">
            <img src={left} alt="" className='left'/>
            <img src={right} alt="" className='right'/>
        </div>
    </div>
  )
}

export default Deal