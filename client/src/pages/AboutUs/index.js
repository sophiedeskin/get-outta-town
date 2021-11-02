import React from 'react'
import './aboutus.css';


export default function AboutUs() {
    return (
      <div>
        <div className="about-section">
          <p>We are a group of 3 full stack students consisting of Sophie, Keith, and Giselle</p>
          <p>Sophie is planning to </p>
        </div>
        <h2 style={{textAlign: 'center'}}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="/sophie.png" alt="Sophie" width="100%" height="130" />
              <div className="container">
                <h2>Sophies Deskin</h2>
                <p className="title">Fullstack WebDev </p>
                <p>Hi! I'm a web developer based in Scottsdale, AZ!</p>
               
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/keith.jpg" alt="Keith" width="100%" height="45" />
              <div className="container">
                <h2>Keith Whitman</h2>
                <p className="title">Fullstack WebDev</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
               
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/me2.jpg" alt="Giselle" width="100%" height="130" />
              <div className="container">
                <h2>Giselle Borbolla</h2>
                <p className="title">Fullstack Webdev</p>
                <p>Current Student of University of Arizona's Full Stack Web Development bootcamp.</p>
               
               
              </div>
             </div>
          </div> 
        </div>
        {/* <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div> */}
        {/* <p>Enter your HTML here</p> */}
      </div> 
    );

}
  
  