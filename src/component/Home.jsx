import React from 'react'
import {Header} from './Header'
import {Video} from'./Video'
import {StaticCourseCard} from'./StaticCourseCard'
import Alumini from './Alumini'

const Home = () => {
  return (
    <div>
      <Video/>
      <Header/>    
      <StaticCourseCard/>     
      <Alumini />  
    </div>
  )
}

export default Home
