import React from 'react'
import Navbar from '../components/navbar'
import Login from '../components/login'
import AnimatedPage from '../components/animatePage'
import Popup from '../components/popup';

const LoginPage = () => {
 
  return (
    <>
      <Navbar/>
      <AnimatedPage>
      <Login/>
      </AnimatedPage>
    </>
  )
}

export default LoginPage
