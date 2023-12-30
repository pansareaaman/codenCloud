import React from "react";
import HeaderImg from "../assets/headerImg.jpg";
import { NavLink } from "react-router-dom";
import "../style/Header.css";
import Swal from "sweetalert2";
// import Typical from "react-typical";

export const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Access form data using event.target
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Form data: ", formDataObject);

    // Reset the form fields
    event.target.reset();

    Swal.fire({
      title: `Good job ${formDataObject.name}!`,
      text: "Your Response has been Submitted Successfully!!!",
      icon: "success",
    });
  };

  return (
    <div>
      <nav className="headerBox">
        <a href={`/moredetails/106`} className="link">
          HTML
        </a>
        <a href={`/moredetails/102`} className="link">
          CSS
        </a>
        <a href={`/moredetails/103`} className="link">
          JS
        </a>
        <a href={`/moredetails/109`} className="link">
          C
        </a>
        <a href={`/moredetails/108`} className="link">
          C++
        </a>
        <a href={`/moredetails/107`} className="link">
          Java
        </a>
        <a href={`/moredetails/111`} className="link">
          Python
        </a>
        <a href={`/moredetails/104`} className="link">
          PHP
        </a>
        <a href={`/moredetails/101`} className="link">
          React Js
        </a>
      </nav>

      {/* <nav className="headerBox2">
      <NavLink to={`/moredetails/101`} className="link">
      <p>Academic Cources</p> 
        </NavLink>
        <NavLink to={`/moredetails/101`} className="link">
        <p>Professional Cources</p>
        </NavLink>  
      </nav> */}

      <div className="headerMain">
        <div className="headerInfo">
          <div className="form-parent">
            <form
              name="contact-form"
              className="cc-float-form"
              onSubmit={handleSubmit}
            >
              <p></p>
              Name:
              <br />
              <input
                type="text"
                className="contact-form-area"
                id="ContactForm1_contact-form-name"
                name="name"
                size="30"
                required
              />
              <p></p>
              Email:
              <span style={{ color: "red" }}>*</span>
              <br />
              <input
                className="contact-form-area"
                id="ContactForm1_contact-form-email"
                name="email"
                size="30"
                type="email"
                required
              />
              <p></p>
              Message: <span style={{ color: "red" }}>*</span>
              <br />
              <textarea
                className="contact-form-area"
                id="ContactForm1_contact-form-email-message"
                name="email-message"
                cols="25"
                rows="5"
              ></textarea>
              <p></p>
              <button
                className="contact-form-button contact-form-button-submit"
                id="ContactForm1_contact-form-submit" style={{backgroundColor:"#0766AD",color:"white",borderRadius:"10px",Size:"30px"}}

              >
                submit
              </button>
              <p></p>
            </form>
          </div>

          <div className="embut">
            <h1>
              Welcome to <span className="codenColor">Code n Cloud</span>
            </h1>
            <h3>
              Learn{" "}
              {/* <Typical
                steps={[
                  "DSA",
                  1500,
                  "React-JS",
                  1500,
                  "Node-Js",
                  1500,
                  "C++",
                  1500,
                  "SQL",
                  1500,
                  "Java",
                  1500,
                ]}
                loop={Infinity}
                wrapper="b"
              /> */}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates velit aliquam mollitia sit. Labore blanditiis nesciunt
              dolorum perspiciatis esse molestiae sint fugiat dolor atque.
              Ratione animi tempora ipsa delectus at veritatis minima. Rerum non
              voluptatum quo laudantium nostrum consequatur a, quaerat incidunt,
              fugit beatae corporis consequuntur delectus deserunt, iure
              impedit?
              <p>Your Email</p>
              <form>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                />
                <button className="button-40">
                  GET STARTED
                </button>
              </form>
            </p>
          </div>
        </div>

        <div className="headerImg">
          <img src={HeaderImg} alt="" className="headerImg"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
