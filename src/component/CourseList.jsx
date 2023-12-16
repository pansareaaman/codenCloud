import React from 'react'
import { useState } from 'react'
import react from '../assets/react.png'
import CourseCard from './CourseCard'
const CourseList = () => {
    const[data,setData]=useState([
        {id:101,img:'https://images.app.goo.gl/tp9nAPDt5CngnUUx5',title:'React-Js',instructor:'Umar Solanki',price:'4000',description: 'Frontend',course:'Professional',link:'/reactjs'},
        {id:102,img:'https://example.com/node_image.jpg',title:'Node',instructor:'Umar Solanki',price:'2000',description: 'Professional',link:'/Html'},
        {id:103,img:'C:\Users\Lenovo\OneDrive\Desktop\Code clone\codenCloud\codenCloud\src\assets\headerImg.jpg',title:'C',instructor:'Umar Solanki',price:'3000',description: 'Backend',course:'Academic',link:'/C'},
        {id:104,img:'C:\Users\Lenovo\OneDrive\Desktop\Code clone\codenCloud\codenCloud\src\assets\headerImg.jpg',title:'C++',instructor:'Umar Solanki',price:'400',description: 'Backend',course:'Academic'},
        {id:105,img:'C:\Users\Lenovo\OneDrive\Desktop\Code clone\codenCloud\codenCloud\src\assets\headerImg.jpg',title:'React-Js',instructor:'Umar Solanki',price:'9000',description: 'Frontend',description: 'Professional'},
        {id:106,img:'C:\Users\Lenovo\OneDrive\Desktop\Code clone\codenCloud\codenCloud\src\assets\headerImg.jpg',title:'React-Js',instructor:'Umar Solanki',price:'7000',description: 'Frontend',description: 'Professional'},
    ]);
  return(
            <div>
            
            <CourseCard data={data} />    
      
    </div>
  )
}

export default CourseList
