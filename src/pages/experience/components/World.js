import React from 'react'
import '../styles/World.scss'
import gem from '../assest/GER.svg'
import eng from '../assest/ENG.svg'
import ind from '../assest/ind.svg'
import nig from '../assest/NIG.svg'
import usa from '../assest/ussa.svg'
import ppl from '../assest/section2.png'

const World = () => {
  return (
    <div className='world'>
        <div className="exp-world">
            <div className="left">
                <h2>We have impacted the lives of <span>thousands</span> around the world</h2>
                <h6>6,000 trained in 14 months</h6>
                <p>Talent Placed in 5 countries</p>
                <div className="exp-grid">
                    <div className="country">
                        <img src={gem} alt="" />
                    </div>
                    <div className="country">
                        <img src={eng} alt="" />
                    </div>
                    <div className="country">
                        <img src={ind} alt="" />
                    </div>
                    <div className="country">
                        <img src={nig} alt="" />
                    </div>
                    <div className="country">
                        <img src={usa} alt="" />
                    </div>
                </div>
            </div>
            <img src={ppl} alt="" className='ppl'/>
            {/* <div className="right">
                <div className="ppl">
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default World