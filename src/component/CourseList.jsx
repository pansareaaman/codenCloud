import React from 'react'
import { useState } from 'react'
import react from '../assets/react.png'
import CourseCard from './CourseCard'
import C from '../assets/c.jpg';
import CPP from '../assets/cpp.jpg';
import HTML from '../assets/html.jpg';
import CSS from '../assets/css.jpg';
import NODE from '../assets/node.jpg';
import PHP from '../assets/php.jpg';
import PYTHON from '../assets/python.jpg';
import JS from '../assets/js.jpg';
import JAVA from '../assets/java.jpg';
import REACT from '../assets/react.jpg';
const CourseList = () => {
    const[data,setData]=useState([
    {id:101,img:REACT ,title:'React-Js',instructor:'Umar Solanki',price:'4000',description: 'Frontend',course:'Professional',link:'/reactjs'},
    {id:102,img:NODE,title:'Node',instructor:'Umar Solanki',price:'2000',description: 'Professional',link:'/node'},
    {id:103,img:C ,title:'C',instructor:'Umar Solanki',price:'3000',description: 'Backend',course:'Academic',link:'/c'},
    {id:104,img:CPP ,title:'C++',instructor:'Umar Solanki',price:'400',description: 'Backend',course:'Academic',link:'/cpp'},
    {id:105,img:HTML ,title:'HTML',instructor:'Umar Solanki',price:'9000',description: 'Frontend',description: 'Professional',link:'/html'},
    {id:106,img:JAVA,title:'Java',instructor:'Umar Solanki',price:'7000',description: 'Backend',description: 'Professional',link:'/java'},
    {id:107,img:PYTHON,title:'Python',instructor:'Umar Solanki',price:'7000',description: 'Backend',description: 'Academic',link:'/python'},
    {id:108,img:CSS ,title:'CSS',instructor:'Umar Solanki',price:'7000',description: 'Frontend',description: 'Professional',link:'/css'},
    {id:109,img:PHP ,title:'Php',instructor:'Umar Solanki',price:'7000',description: 'Backend',description: 'Professional',link:'/php'},
    {id:110,img:JS ,title:'Javascript',instructor:'Umar Solanki',price:'5000',description: 'Backend',description: 'Academic',link:'/js'}
  ]);
  return(
            <div>
            
            <CourseCard data={data} />    
      
    </div>
  )
}

export default CourseList
