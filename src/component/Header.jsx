import React from "react";
import HeaderImg from "../assets/headerImg.jpg";
import { NavLink } from "react-router-dom";
import "../style/Header.css";
import Swal from "sweetalert2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
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

  const [value, setValue] = useState();

  return (
    <div>
      <div className="headerWrapper">
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

        <div className="headerMain">
          <div className="headerInfo">
            <div className="form-parent">
              <form
                className="form cc-float-form"
                name="contact-form"
                action="https://getform.io/f/355929a5-a12a-4741-a621-dbd9946412e9" method="POST"
              >
                <h2 style={{ color: "black" }}>CONTACT US</h2>
                <h5 style={{ color: "black" }}>
                  Book a <span style={{ color: "red" }}>FREE</span> live class
                </h5>
                <p style={{ color: "black" }}></p>
                Name:
                <p type="Name:">
                  <input placeholder="Enter your name " name="NAME" required></input>
                </p>
                Email:
                <p type="Email:">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="EMAIL"
                    required
                  ></input>
                </p>
                Contact No:
                <p type="Contact No:">
                  <input placeholder="Enter your number" name="NUMBER" required></input>
                </p>
                Message:
                <p type="Message:">
                  <input placeholder="Enter your msg" name="MESSAGE" required></input>
                </p>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "",
                    marginLeft: "13px",
                    fontWeight: "bold",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                  id="oldbox"
                >
                  Book Live Class
                </button>
              </form>
            </div>

            <div className="embut">
              <h1>
                Welcome to <span className="codenColor">Code n Cloud</span>
              </h1>
              <h3>
                Learn{" "}
                {/* {
                <Typical
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
                />
              } */}
              </h3>
              <p
                style={{
                  fontFamily:
                    "Poppins, 'Odoo Unicode Support Noto', sans-serif",
                }}
              >
                CodenCloud is a leading IT coaching institute that provides
                comprehensive and industry-relevant training to individuals
                aspiring to build a successful career in the field of
                Information Technology. With a commitment to excellence,
                CodenCloud offers a diverse range of courses and coaching
                programs designed to empower students with the skills and
                knowledge required in today's dynamic IT landscape.
              </p>
              <button className="beautiful-button ">GET STARTED</button>
            </div>
          </div>
          {/* <form action="" onSubmit={handleSubmit}> */}
  <form action="https://getform.io/f/355929a5-a12a-4741-a621-dbd9946412e9" method="POST">
  <div className="nformcontainer" style={{ background: "" }}>
    <div className="inner-nformcontainer">
      <h1>
        Book a <span style={{ color: "red" }}>FREE</span> Live class!
      </h1>
      <p className="radiop">Login to get started</p>

      <div className="radio-bar__text">
        Your Topic of Interest
        <span className="form-field__radio-important">*</span>
      </div>
      <div className="landing-auth-form-radio-group radio-group">
        <input
          name="program"
          value="frontend"
          type="radio"
          id="landing-auth-form-program-se"
          className="radio-input gtm-track-element"
          data-gtm-tracking-allowed="true"
          data-gtm-element="software-engineer-topic"
          required
        />
        <label htmlFor="landing-auth-form-program-se">Frontend</label>

        <input
          name="program"
          value="backend"
          type="radio"
          id="landing-auth-form-program-devops"
          className="radio-input gtm-track-element"
          data-gtm-tracking-allowed="true"
          data-gtm-element="devops-topic"
          required
        />
        <label htmlFor="landing-auth-form-program-devops">Backend</label>

        <input
          name="program"
          value="fullstack"
          type="radio"
          id="landing-auth-form-program-ds"
          className="radio-input gtm-track-element"
          data-gtm-tracking-allowed="true"
          data-gtm-element="data-science-topic"
          required
        />
        <label htmlFor="landing-auth-form-program-ds">Full Stack</label>
      </div>     

      {/* Assuming PhoneInput is a valid component */}
      <PhoneInput
        international
        defaultCountry="IN"
        name="NUMBER"
        value={value}
        onChange={setValue}
        limitMaxLength={10}
        style={{ paddingTop: "20px" }}
        isRequired={true}
      />


<label
        htmlFor="name"
        style={{ marginTop: "20px", display: "flex", width: "100%" }}
      >
        Name:

        <input
          type="text"
          name="NAME"
          id="name"
          style={{ width: "100%", paddingLeft: "10px" }}
          placeholder="Please enter your name"
          required
        />
        </label>
      

      <label
        htmlFor="email"
        style={{ marginTop: "20px", display: "flex", width: "100%" }}
      >
        Email:
        
        <input
          type="email"
          name="EMAIL"
          id="email"
          style={{ width: "100%", paddingLeft: "10px" }}
          placeholder="Please enter your email"
          required
        />
        </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#25336e",
          fontWeight: "bold",
          marginTop: "40px",
          padding: "4px",
          borderRadius: "4px",
          width: "100%",
          color: "white",
          borderRadius: "20px",

        }}
        id="nbox"
      >
        Contact
      </button>
    </div>
  </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default Header;
