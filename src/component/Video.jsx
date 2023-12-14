import React from 'react'
import Videomain from '../assets/main.mp4'
import '../style/Video.css'
export const Video = () => {
  return (
    <div className='main'>
      <video src={Videomain} autoPlay loop muted></video>
      <div className="content">
        <h1 className='mainText'>CODE N CLOUD</h1>
        {/* <p>Menu</p> */}
      </div>
    </div>
  )
}


