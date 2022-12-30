import React from 'react'
import { useState } from 'react'
import './blog.css'

const Blog = () => {
    const [nameSttate1,setNameState1] = useState("name-down");
    const [nameSttate2,setNameState2] = useState("name-down");
    const [nameSttate3,setNameState3] = useState("name-down");


    const center_name1 = ()=>{
            setNameState1("project-name");
    }

    const name_down1 = ()=>{
            setNameState1("name-down");
    }

    const center_name2 = ()=>{
        setNameState2("project-name");
}

const name_down2 = ()=>{
        setNameState2("name-down");
}

const center_name3 = ()=>{
    setNameState3("project-name");
}

const name_down3 = ()=>{
    setNameState3("name-down");
}


  return (
    <div className='all-box'>

    <div onMouseOut={name_down1} onMouseOver={center_name1} className='box-1 box'>
      <div className={nameSttate1}>family chat</div>
    </div>

    <div onMouseOut={name_down2} onMouseOver={center_name2} className='box-2 box'>
      <div className={nameSttate2}>wordle</div>
    </div>

    <div onMouseOut={name_down3} onMouseOver={center_name3} className='box-3 box'>
      <div className={nameSttate3}>screen recorder</div>
    </div>
    </div>
  )
}

export default Blog
