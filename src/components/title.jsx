import React from 'react'
import { useState } from 'react';
import './title.css'

const Title = (props) => {

  const [showTitle,setShowTitle] = useState("title");

  window.onscroll = ()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowTitle("hide");
    } else {
      setShowTitle("title");
    }
  }


  return (
    <div>
      <h1 className={showTitle}>{props.text}</h1>
    </div>
  )
}

export default Title
