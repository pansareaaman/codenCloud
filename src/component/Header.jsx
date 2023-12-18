import React from 'react'
import HeaderImg from '../assets/headerImg.jpg';
import { NavLink} from 'react-router-dom';
import '../style/Header.css'
export const Header = () => {
  return (
    <div>
        <nav className='headerBox'>
            <NavLink to='/html' className='link'>HTML</NavLink>
            <NavLink to='/css' className='link'>CSS</NavLink>
            <NavLink to='/js' className='link'>JS</NavLink>
            <NavLink to='/c' className='link'>C</NavLink>
            <NavLink to='/cpp' className='link'>C++</NavLink>
            <NavLink to='/java' className='link'>Java</NavLink>
            <NavLink to='/python' className='link'>Python</NavLink>
            <NavLink to='/php' className='link'>PHP</NavLink>
            <NavLink to='/reactjs' className='link'>React Js</NavLink>
        </nav>
       

        <div className='headerMain'>
            <div className='headerInfo'>
                    
                    <h1>Welcome to <span className='codenColor'>Code n Cloud</span></h1>
                    <h3>Learn DSA</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates velit aliquam mollitia sit. Labore blanditiis nesciunt dolorum perspiciatis esse molestiae sint fugiat dolor atque. Ratione animi tempora ipsa delectus at veritatis minima. Rerum non voluptatum quo laudantium nostrum consequatur a, quaerat incidunt, fugit beatae corporis consequuntur delectus deserunt, iure impedit?</p>
                    <p>Your Email</p>
                    <div className="embut">
                        <form >
                        <input type="email" className="email-input" placeholder="Enter your email"  />
                        <button class="button-40" role="button">GET STARTED</button>
                        </form>
                        
                    </div>
                               
            </div>  

            <div className='headerImg'>
                <img src={HeaderImg} alt="" />
            </div>
        </div>

    </div>
  )
}


