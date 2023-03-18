import React from 'react'
import "./Copyright.css"
import linkdin from "../../Images/linkedin.png"
import github from "../../Images/github.png";
const Copyright = () => {
  return (
    <>
      <div className="bg-black ">
        <p className="text-white fs-5 text-center">
          Copyright @2023 Ankit Personal Profile<hr/>
        </p>
        <div className="logos1">
          <a
            href="https://www.linkedin.com/in/ankit-bankar-b36a65256/"
            target="_blank"
          >
            <img src={linkdin} height="30" />
          </a>
          <a href="https://github.com/Ankitb3" target="_blank">
            <img src={github} height="30" className="bg-white" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Copyright