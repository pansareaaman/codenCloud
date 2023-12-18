import React from 'react';
import HeaderImg from '../assets/headerImg.jpg';
import { NavLink } from 'react-router-dom';
import '../style/Header.css';
import Swal from 'sweetalert2'
import Typical from 'react-typical';

export const Header = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Access form data using event.target
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
        console.log('Form data: ', formDataObject);
        
        // Reset the form fields
        event.target.reset();

        Swal.fire({
            title: `Good job ${formDataObject.name}!`,
            text: "Your Response has been Submitted Successfully!!!",
            icon: "success"
          });
      };

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
          <div className='form-parent'>
            <form name="contact-form" className="cc-float-form" onSubmit={handleSubmit}>
              <p></p>
              Name:<br />
              <input type="text" className="contact-form-area" id="ContactForm1_contact-form-name" name="name" size="30"   required/>
              <p></p>
              Email:
              <span style={{ color: "red" }}>*</span><br />
              <input className="contact-form-area" id="ContactForm1_contact-form-email" name="email" size="30" type="email" required />
              <p></p>
              Message: <span style={{ color: "red" }}>*</span><br />
              <textarea className="contact-form-area" id="ContactForm1_contact-form-email-message" name="email-message" cols="25" rows="5"></textarea>
              <p></p>
              <button className="contact-form-button contact-form-button-submit" id="ContactForm1_contact-form-submit"  role='button' >submit</button >
              <p></p>
              
            </form>
          </div>

          
          <div className="embut">
          <h1>Welcome to <span className='codenColor'>Code n Cloud</span></h1>
          <h3 >Learn <Typical
                        steps={[ 'DSA', 1500, 'Programmer', 1500,'React', 1500,'C++', 1500,'SQL', 1500,'Node', 1500 ]}
                        loop={Infinity}
                        wrapper="b"
                    /></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates velit aliquam mollitia sit. Labore blanditiis nesciunt dolorum perspiciatis esse molestiae sint fugiat dolor atque. Ratione animi tempora ipsa delectus at veritatis minima. Rerum non voluptatum quo laudantium nostrum consequatur a, quaerat incidunt, fugit beatae corporis consequuntur delectus deserunt, iure impedit?
          <p>Your Email</p>
            <form>
              <input type="email" className="email-input" placeholder="Enter your email" />
              <button className="button-40" role="button">GET STARTED</button>
            </form>
          </p>
          
          </div>
        </div>

        <div className='headerImg'>
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
