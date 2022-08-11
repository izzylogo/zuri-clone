import React from 'react'
import '../styles/Modal.scss'

const Modal = ({open, close, mode}) => {
    
    if (mode === false){
        return null
    }
  return (
    <div className="modal" onClick={close}>
        <div className="modal-container" 
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            <h1>Talent Recuritment</h1>
            <p>We love to discuss your business and talent needs.</p>
            <div className="modal-button">
                <button>Fill this form</button>
                OR
                <button>Book a Consultation</button>
            </div>
        </div>
    </div>
  )
}

export default Modal