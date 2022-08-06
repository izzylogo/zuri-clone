import React from 'react'
import '../styles/Sec6Card.scss'
import css from '../../../assests/css-3 logo.svg'
import html from '../../../assests/html.svg'
import javascript from '../../../assests/javascript logo.svg'
import php from '../../../assests/php2 logo.svg'
import python from '../../../assests/python-4 logo.svg'
import abode from '../../../assests/adobe-xd logo.svg'
import figma from '../../../assests/Figma logo.svg'
import ubuntu from '../../../assests/Ubuntu logo.svg'
import bash from '../../../assests/Bash logo.svg'
import aws from '../../../assests/aws logo.svg'
import laravel from '../../../assests/Laravel logo.svg'
import react from '../../../assests/React logo.svg'
import django from '../../../assests/Django logo.svg'


const Sec6Card = () => {
  return (
    <div className='sec6card'>
    
        <div className="sec6con">
            <h2>Frontend Development</h2>
            <div className="logos">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
            </div>
            <p>This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.</p>
        </div>
        <div className="sec6con">
            <h2>Backend Development</h2>
            <div className="logos">
                <img style={{width: '55px'}} src={php} alt="" />
                <img src={python} alt="" />
                <img src={javascript} alt="" />
            </div>
            <p>This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.</p>
        </div>
        <div className="sec6con">
            <h2>Product Design</h2>
            <div className="logos">
                <img src={abode} alt="" />
                <img style={{width: '80px'}} src={figma} alt="" />
                <img src={javascript} alt="" />
            </div>
            <p>This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with.</p>
        </div>
        <div className="sec6con">
            <h2>DevOPS</h2>
            <div className="logos">
                <img style={{width: '90px'}} src={ubuntu} alt="" />
                <img style={{width: '80px'}} src={bash} alt="" />
                <img src={aws} alt="" />
            </div>
            <p>The DevOps track is an extension of the backend track. It involves tools that’ll allow the participant to deploy solutions for public use.</p>
        </div>
        <div className="sec6con">
            <h2>Fullstack Development</h2>
            <div className="logos">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
                <img src={python} alt="" />
            </div>
            <p>A combination of frontend, backend, and DevOps. This track will only be available to participants who have the time to dedicate to the training.</p>
        </div>
        <div className="sec6con">
            <h2>Frameworks</h2>
            <div className="logos">
                <img style={{width: '90px'}} src={laravel} alt="" />
                <img style={{width: '90px'}} src={react} alt="" />
                <img  src={django} alt="" />
            </div>
            <p>During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster.</p>
        </div>
    </div>
  )
}

export default Sec6Card