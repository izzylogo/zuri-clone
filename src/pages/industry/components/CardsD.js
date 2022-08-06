import React from 'react'
import '../styles/CardsD.scss'
import cwhi from '../../../assests/curve-white.png'


const CardsD = ({num, topic, detail, img, style, text}) => {
  return (
    <div className="card-body" style={style}>
        <img src={img} alt="" />
        <h1 style={text}>{num}</h1>
        <h2 style={text}>{topic}</h2>
        <p style={text}>{detail}</p>
    </div>
  )
}

export default CardsD