import React from 'react'
import { Link } from 'react-router-dom';
import image from '../assets/headerImg.jpg'
import REACT from '../assets/react.jpg';
import '../style/StaticCourseCard.css'
import { FaArrowAltCircleRight } from "react-icons/fa";

export const StaticCourseCard = () => {
  return (
    <div className='stCourse'>
      <h1 className='h1 col-md-8 mx-auto text-center'>Courses</h1>
        <div class="card-group">
        <div class="card">
    <img src={REACT} class="card-img-top" alt="..." style={{ backgroundSize:'cover'}}/>
    <div class="card-body">
      <h5 class="card-title">React-Js</h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      
      <Link to={`/moredetails/101`} class="btn btn-primary">More Details</Link>
    </div>
  </div>
  <div class="card">
    <img src={image} class="card-img-top" alt="..." style={{ objectFit:'cover'}}/>
    <div class="card-body">
      <h5 class="card-title">C++</h5>
  
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <Link  to={`/moredetails/108`} class="btn btn-primary">More Details</Link>
    </div>
  </div>
  <div class="card card-img-top" style={{border:"none",boxShadow:"none"}}> 
    <div class="card-body"  style={{display:"flex", alignItems:"center",justifyContent:"center",padding:"20px",}}>
 <a className="butt" href='/course'><FaArrowAltCircleRight size={50} /><p style={{fontSize:"30px"}}>ALL COURSES</p></a>
 
    </div>
   
  </div>
  </div>
 </div>
    
  )
}