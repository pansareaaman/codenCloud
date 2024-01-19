// ContactUs.jsx

import "../style/ContactUs.css";
import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
        console.log('Form data: ', formDataObject);
        
        event.target.reset();

        Swal.fire({
            title: `SUCCESSFUL  ${formDataObject.fname}!`,
            text: "Your response has been submitted successfully!",
            icon: "success"
        });
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="contact-heading">CONTACT</h6>
                        <h1 >Get In Touch</h1>
                        <p>We're here to help and answer any Question you might have. We look forward to hearing from you
                            <span><i className="fas fa-smile"></i></span></p>
                    </div>
                </div>

                <form className="row g-3 justify-content-center text-center" action="https://getform.io/f/355929a5-a12a-4741-a621-dbd9946412e9" method="POST" >
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="NAME" placeholder="Full Name" required/>
                    </div>
                    <div className="col-md-3">
                        <input type="email" className="form-control" name="EMAIL" placeholder="E-mail" required/>
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control" name="NUMBER" placeholder="Contact Number" required/>
                    </div>
                    <div className="col-md-10">
                        <input type="text" className="form-control" name="SUBJECT" placeholder="Subject" required/>
                    </div>
                    <div className="col-md-10">
                        <textarea name="MESSAGE" cols="30" rows="5" className="form-control" placeholder="Message" />
                    </div>
                    <div className="col-md-10 d-grid gap-2">
                        <button type="submit" className="btn btn-primary" id="contactUs">Contact</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
