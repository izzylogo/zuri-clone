import React from 'react'
import '../styles/Hire.scss'
import people from '../assest/people.svg'
import mech  from '../assest/mech.svg'
import hand from '../assest/hir-hand (1).svg'
import write from '../assest/write.svg'
import many from '../assest/many.svg'

const Hire = () => {
  return (
    <div className='hire' id='hire'>
        <div className="exp-hire">
            <h1>Why Hire our <span> Talents</span></h1>
            <div className="hire-box">
                <div className="hire-card">
                    <img src={people} alt="" />
                    <p>Zuri Team has a highly skilled set of talents that are built on referral and successful partnerships.</p>         
                </div>
                <div className="hire-card">
                    <img src={mech} alt="" />
                    <p>Our recruiters are exceptionally skilled in identifying top talent around the globe and matching them with the client's needs.</p>
                </div>
                <div className="hire-card">
                    <img src={hand} alt="" />
                    <p>We have an 85% fill ratio for every open position we partner for.</p>
                </div>
                <div className="hire-card">
                    <img src={write} alt="" />
                    <p>Contract renewal rate for our consultant is 90 percent.</p>
                </div>
                <div className="hire-card">
                    <img src={many} alt="" />
                    <p>60% of our consultants are converted to full-time employees.</p>
                </div>
            </div>
            <div className="hire-btn">
                <button>Hire talents</button>
                <button>Join talent pool</button>
            </div>
        </div>
    </div>
  )
}

export default Hire