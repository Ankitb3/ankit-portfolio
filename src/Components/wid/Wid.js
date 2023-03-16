import React from 'react'
import "./Wid.css"
import cmp from ".././../Images/computer.gif"
import website from "../../Images/website.gif";


const Wid = () => {
 
  return (
    <>
      <div className="wid_container">
        <div className="wid_content " id="wid">
          <h2
            className="text-white text-center"
           
          >
            WHAT I DO
          </h2>
        </div>
        <div className="wid_main  container w-100 mt-5">
          <div>
            <img src={cmp} alt="cmp" />
            <span className="text-white fs-3 ms-3  mb-3">Resonsive Mobile</span>
          </div>
          <div>
            <img src={website} alt="cmp" className="second_img" />
            <span className="text-white fs-3 ms-3  mb-3">Website</span>
          </div>
          <div>
            <img src={cmp} alt="cmp" className="third_img" />
            <span className="text-white fs-3 ms-3  mb-3 ">
              Performance of website
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wid