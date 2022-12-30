import React from 'react'
import Navbar from '../components/navbar'
import AnimatedPage from '../components/animatePage'
import Title from '../components/title'
import Blog from '../components/blog'

const HomePage = () => {

  return (
    <div>
      <Navbar/>
      <AnimatedPage>
      <Title text="My Projects"/>
      <Blog/>
      </AnimatedPage>
    </div>
  )
}

export default HomePage
