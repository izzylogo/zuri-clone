import React from 'react'
import '../styles/SectionA.scss'
import pic from '../../../assests/ingresive.png'

const SectionA = () => {
  return (
    <div className="section">
        <div className='sec'>
            <h4 className="cee" >
                INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN DONATION...
            </h4>
            <img src={pic} alt="" className="mid" />
            <p className="sum">
                to help increase the earning power of African youths by providing them with tech skills, community, tools, resources, and jobs... 
            </p>
        </div>
        <hr />
    </div>
  )
}

export default SectionA