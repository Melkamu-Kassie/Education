import React from 'react';
import './About.css'
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play_icon" onClick={()=>{ setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today!</h2>
        <p>
          AASTU likely refers to Addis Ababa Science and Technology University
          (AASTU), a prominent institution of higher education located in Addis
          Ababa, Ethiopia. Here's some information about AASTU:
        </p>
        <p>
          Establishment: AASTU was established in 2011 by the Ethiopian
          government with the aim of advancing science, technology, engineering,
          and mathematics (STEM) education in the country.
        </p>
        <p>
          Focus Areas: The university focuses on offering undergraduate and
          graduate programs primarily in science and technology fields,
          including engineering, computer science, natural sciences, and applied
          mathematics.
        </p>
      </div>
    </div>
  );
}

export default About;
