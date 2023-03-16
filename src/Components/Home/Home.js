import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="container-fluid home_container">
        <div className="Home_containt">
          <div>
            <h3 className="mb-5">Simple and Elegant</h3>
            <h4>Ankit</h4>
            <p className="fs-3 mt-5">Frontend Devloper</p>

            <a href="#wid" smooth>
              <button type="button" className="ms-5 mt-3">
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home