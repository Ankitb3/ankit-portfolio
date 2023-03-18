import React,{useEffect,useState} from 'react'
import "./Contact.css"
import phone from "../../Images/phone.gif"
import email from "../../Images/email.gif";

import location from "../../Images/location.gif";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => { 
  
  useEffect(() => {
  AOS.init();
}, []);



  return (
    <>
      <div className="contact_container bg-black">
        <div className="container text-white contact_content">
          <div className=" contact" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="text-center ">Contact Me</h3>
            <div className="ms-4 ">
              <img src={phone} />
              <a href="tel:7385601395">
                <span className="ms-3 fs-4">+917385601395</span>
              </a>
              <br />
              <br />
              <br />
              <img src={email} />
              <a href="mailto:bankarankit3@gmail.com">
                <span className="email">bankarankit3@gmail.com</span>
              </a>
              <br />
              <br />
              <br />
              <img src={location} />
              <span className="ms-3 fs-4">Nagpur</span>
            </div>
          </div>
          <div
            className="text-white form"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form
              action="mailto:bankarankit3@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="inputs">
                <input type="text" placeholder="Your name"   required />
               
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="Your email"
                />
                <textarea
                  rows="4"
                  cols="50"
                  required
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className="text-white"
                  name="submit"
                  
                >
                  Send Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact