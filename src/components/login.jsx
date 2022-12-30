import React from 'react'
import { useState } from 'react';
import './login.css';

const Login = () => {
  const [pass,setPass] = useState(undefined);
  

  function getPass(e){
    console.log(e.target.value);
    setPass(e.target.value);
  }

  function checkPass(){
    if(pass !== undefined && pass.length > 0){
      console.log("dfghjk");
    }
  }

  if(localStorage.getItem("loged in") !== null){
    return (
      <div className='login-box'>
        <div className="warning-text">you have alredy loged in</div>
        <button className='back-btn'>go back</button>
      </div>
    )
  }else{
    return (
      <div className='login-box'>
        <input type="text" className='name-input login' placeholder='enter your name'/>
        <input onChange={getPass} type="text" className='pass-input login' placeholder='enter your password'/>
        <button className='login-btn' onClick={checkPass}>login</button>
      </div>
    )
  }

 
}

export default Login
