import React from 'react'
import '../styles/CardIn.scss'
import CardsD from './CardsD'
import cwhi from '../../../assests/curve1.png'
import cyell from '../../../assests/curve.svg'
import cgree from '../../../assests/curve3.svg'
import cpink from '../../../assests/curve4.svg'
import coran from '../../../assests/curve5.svg'
import cpurp from '../../../assests/curve6.svg'

const CardIn = () => {

  return (
    <div className='card-in'>
      <CardsD
        img={cwhi}
        num='01'
        topic={
          <>Fully <br/> Remote</>
        }
        detail='100% online classes available to anyone in the world.'
        style={{backgroundColor: "#e7332b"}}
      />
      <CardsD
        img={cyell}
        num='02'
        topic={
          <>Hands-on<br/>Experience</>
        }
        detail="We don't just teach you theory, we show you how to build things."
        style={{backgroundColor: "white"}}
        text={{color: "#292929"}}
      />
      <CardsD
        img={cgree}
        num='03'
        topic={
          <>Collaborative<br/>Learning</>
        }
        detail="We connect you with like minds to grow together."
        style={{backgroundColor: "white"}}
        text={{color: "#292929"}}
      />
      <CardsD
        img={cpink}
        num='04'
        topic={
          <>Real-life<br/>Projects</>
        }
        detail="We give CV worthy projects to help you hit the ground running."
        style={{backgroundColor: "white"}}
        text={{color: "#292929"}}
      />
      <CardsD
        img={coran}
        num='05'
        topic={
          <>Beginner<br/>Friendly</>
        }
        detail="We provide step-by-step procedures on how to get things done."
        style={{backgroundColor: "white"}}
        text={{color: "#292929"}}
      />
      <CardsD
        img={cpurp}
        num='06'
        topic={
          <>In-program<br/>Mentorship</>
        }
        detail="During and after the program you have access to experience seniors."
        style={{backgroundColor: "white"}}
        text={{color: "#292929"}}
      />
        
    </div>
  )
}



export default CardIn