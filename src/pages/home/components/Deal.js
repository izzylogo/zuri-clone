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
        <div className="dealCa">
            <div className="gather">
                <div className='d-card'>
                    <div className="d-topic leftTran">
                        <div className="card-head">Zuri<span>.</span>Training</div>
                        <p className='para'>
                            We understand a complete beginner
                            cannot become a professional after a 
                            few weeks, the aim here is to get you 
                            familiar enough with each the tools such 
                            that you’ll be able to continue learning 
                            on your own with minimal support.
                        </p>
                        <p className="card-bot">I want to be trained &gt;</p>
                    </div>
                    <img src={left} alt="" className='left' />
                </div>
                <div className='d-card'>
                    <div className="d-topic leftTran">
                        <div className="card-head">Zuri<span>.</span>Internship</div>
                        <p className='para'>
                            We place you in a work simulation. 
                            We give you tasks every week, the tasks ranges 
                            from easy to hard as you progress from stage to stage, 
                            making it to the final stage means you are ready for actual work.
                        </p>
                        <p className="card-bot">I want to be join the internship &gt;</p>
                    </div>
                </div>
                <div className='d-card'>
                    <div className="d-topic leftTran">
                        <div className="card-head">Zuri<span>.</span>Training</div>
                        <p className='para'>
                            Keeping pace with projects and being on the look out 
                            for the extremely talented individuals has become ever 
                            more challenging. Here is where Zuri Team comes into play 
                            to bring the best suited talent for your company
                        </p>
                        <p className="card-bot">I am looking for talent &gt;</p>
                    </div>
                    <img src={right} alt="" className='right' />
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Deal