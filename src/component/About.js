import React from 'react';
import web from "../images/img1.png"
import "./nav.css";
import Common from './Common';


const About = () => {
  return (
    <Common 
    name='Welcome to my devloping page' 
    imgsrc={web} 
    visit="/contact" 
    btname="Contact Now"
    />
  )
}

export default About;