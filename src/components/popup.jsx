import React from 'react'
import './popup.css'
import { X } from 'react-bootstrap-icons'

const Popup = (props) => {
  return (
    <>
    <div className="block"></div>
    <div className='popup-box'>
      <div className="popup-text">{props.text}</div>
      <button className="popup-btn">{props.btn}</button>
      <button className="popup-close"><X/></button>
    </div>
    </>
  )
}

export default Popup
