import React, { useState } from 'react'
import '../styles/Question.scss'
import arr from '../../../assests/section7wire.svg'
import {BsTwitter} from 'react-icons/bs'

const Question = () => {

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [check5, setCheck5] = useState(false)

    const toogle1 = () => {
        setCheck1(prevCheck => !prevCheck)
        console.log(check1)
    }
    const toogle2 = () => {
        setCheck2(prevCheck => !prevCheck)
        console.log(check2)
    }
    const toogle3 = () => {
        setCheck3(prevCheck => !prevCheck)
        console.log(check3)
    }
    const toogle4 = () => {
        setCheck4(prevCheck => !prevCheck)
        console.log(check4)
    }
    const toogle5 = () => {
        setCheck5(prevCheck => !prevCheck)
        console.log(check5)
    }

  return (
    <div className='question'>
        <div className="questions">
            <div className="questarrow">
                <img src={arr} alt="" />
            </div>
            <div className="questions-top">
                <h4>Got Questions?</h4>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="table">
                <div className="questsection">
                    <section className="lists">
                        <section className="ques">
                            <h2>Would i have to pay to enroll for the training ?</h2> 
                            <span onClick={toogle1}>+</span>
                        </section>
                        <p
                            className={check1 ? "show" : 'hide'}
                        >No, the program is completely free thanks to Ingressive For Good</p>
                    </section>
                    <section className="lists">
                        <section className="ques">
                            <h2>What are the things I would need to participate?</h2> 
                            <span onClick={toogle2}>+</span>
                        </section>
                        <p
                            className={check2 ? "show" : 'hide'}
                        >You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship.</p>
                    </section>
                    <section className="lists">
                        <section className="ques">
                            <h2>What happens if i join and I’m not active?</h2> 
                            <span onClick={toogle3}>+</span>
                        </section>
                        <p
                            className={check3 ? "show" : 'hide'}
                        >Participants who join the program and stop engaging will be given the chance to catch up. You'll also be assigned a 'study-mate' and mentor to help you. However, there is the possibility of not being promoted to the next stage if you remain inactive for too long</p>
                    </section>
                    <section className="lists">
                        <section className="ques">
                            <h2>Can I switch from the part-time track to full-time and vice versa?</h2> 
                            <span onClick={toogle4}>+</span>
                        </section>
                        <p
                            className={check4 ? "show" : 'hide'}
                        >Unfortunately, no, you cannot switch from part-time to full-time and vice-versa</p>
                    </section>
                    <section className="lists">
                        <section className="ques">
                            <h2>Will I get paid?</h2> 
                            <span onClick={toogle5}>+</span>
                        </section>
                        <p
                            className={check5 ? "show" : 'hide'}
                        >We reward some participants who complete tasks early, however, this is not a weekly reward. All the work that will be done during the program are hypothetical.</p>
                    </section>
                </div>
            </div>
            <div className="more">
                <p className="m">Still got qusetions?</p>
                <button className="mor"><BsTwitter color='white'className='icon'/> Tweet them at us</button>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default Question