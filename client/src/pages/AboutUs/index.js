import React from 'react'
import './aboutus.css';


export default function AboutUs() {
    return (
      <div>
        <div className="about-section">
          <p>Group of three full stack web developer students attending UofA's bootcamp. </p>
          
        </div>
        <h2 style={{textAlign: 'center'}}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="/sophie.png" alt="Sophie" style={{height: '340px', width: '100%'}} />
              <div className="container">
                <h2>Sophie Deskin</h2>
                <p className="title">Fullstack WebDev </p>
                <p>Hi! I'm a web developer based in Scottsdale, AZ!</p>
               
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/keith.jpg" alt="Keith" style={{height: '340px', width: '100%'}} />
              <div className="container">
                <h2>Keith Whitman</h2>
                <p className="title">Fullstack WebDev</p>
                <p>Web developer based in Phoenix,AZ.</p>
               
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/me2.jpg" alt="Giselle" style={{height: '340px', width: '100%'}} />
              <div className="container">
                <h2>Giselle Borbolla</h2>
                <p className="title">Fullstack Webdev</p>
                <p>Hey! WebDev student located out in Goodyear,AZ.</p>
               
               
              </div>
             </div>
          </div> 
        </div>
      </div> 
      
    );
  
}


  
  