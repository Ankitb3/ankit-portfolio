import React,{useEffect} from 'react'
import "./About.css"
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../../Images/resume.pdf"
import resumegif from "../../Images/download.gif"
const About = () => {
     useEffect(() => {
       AOS.init();
     }, []);
  return (
    <>
      <div className="about_section bg-black " >
        <div className="container ">
          <div
            className=" first"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2 className="text-white ">About Ankit</h2>
            <h3 style={{ color: "#D43F52" }} className="mt-5">
              Front-End Developer(React.js)
            </h3>
            <p className="text-white">
              Hi, I'm Ankit and I graduated from the University of Nagpur in
              2022 with a degree in Computer Science(BCA).
              <br /> My interests are in Front End Devlopment, and I love to
              create beautiful and performant products with delightful user
              experiences.
            </p>
            <a href={resume} download className="resume">
              <button>
                Resume
                <span>
                  <img src={resumegif} height='30' />
                </span>
              </button>
            </a>
          </div>
          <div
            className=" mt-5 text-white second"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <h5>Html</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
            <h5>Css</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
            <h5>Bootstrap</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-50"></div>
            </div>
            <h5>Javascript</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-50"></div>
            </div>
            <h5>Reactjs</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-50"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About