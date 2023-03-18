import React,{useEffect} from 'react'
import "./Project.css"
import crud from "../../Images/crud.png"
import wheather from "../../Images/wheather.png"
import roadtojs from "../../Images/roadtojs.png"
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <>
      <div className="project_container">
        <h2 className="text-center text-white">Recents Projects</h2>
        <div className="container text-white projects mt-5">
          <a href="https://crudoperationreact2.netlify.app/" target="_blank">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img src={crud} className="crudapp" />
              <h4>Crud app</h4>
            </div>
          </a>
          <a
            href="https://road-to-js.netlify.app/"
            target="_blank"
            className="roadtojs"
          >
            <div data-aos="zoom-in" data-aos-duration="1300">
              <img src={roadtojs} />
              <h4>Road to js</h4>
            </div>
          </a>
          <a href="https://weather-app64.netlify.app/" target="_blank">
            <div data-aos="zoom-in" data-aos-duration="1500">
              <img src={wheather} className="thirdimg" />
              <h4>Wheather app</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project