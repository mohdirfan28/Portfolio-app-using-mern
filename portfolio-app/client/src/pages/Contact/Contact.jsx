import React from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin,BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src="/public/images/contact.jpg" alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <h6>Contact With
                 <BsLinkedin color="blue" size={30} className="ms-2" />
                 <BsGithub color="black" size={30} className="ms-2" />
                 <BsFacebook color="blue" size={30} className="ms-2" />

                 </h6>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />
                <samll className="or text-center">OR</samll>
                <div className="line" />
              </div>
              <div className="row px-3" >
                <input type="text" 
                name="name"
                 placeholder="Enter your name" 
                 className="mb-3"/>
              </div>
              <div className="row px-3" >
                <input type="email"
                name="email"
                 placeholder="Enter your email" 
                 className="mb-3"/>
              </div>
              <div className="row px-3" >
                <textarea type="text" 
                name="msg"
                 placeholder="Write your message" 
                 className="mb-3"/>
              </div>
              <div className="row px-3" >
               
                <button className=""type="submit">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
