import React from 'react'
import '../styles/Talent.scss'
import line2 from '../assest/line1.svg'


const Talent = () => {
  return (
    <div className='talent'>
        <div className="exp-talent">
            <div className="sectA">
                <h1>Skills of our <span>talents</span> that you will need</h1>
                <div className="flexins">
                    <div className="flexin">
                        <p>UI/UX Designers</p>
                        <p>Backend Developers</p>
                        <p>DevOps Engineers</p>
                        <p>Frontend Developers</p>
                    </div>
                    <img src={line2} alt="" />
                </div>
            </div>
            <div className="sectA">
                <h1>Where our talents work</h1>
                <div className="flexins">
                    <div className="flexin">
                        <p>GitHub</p>
                        <p>Microsoft</p>
                        <p>Reskill Americans</p>
                        <p>Flutterwave</p>
                        <p>Google</p>
                        <p>Career Transitio</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Talent