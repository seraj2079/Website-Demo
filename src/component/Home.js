import React from 'react';
import img from "../images/img2.jpg"
import "./nav.css";
import Common from './Common';




const Home = () => {
    return (
        <Common 
        name='Grow your business witt my team' 
        imgsrc={img} 
        visit="/service" 
        btname="Get Start"
        />
    )
}

export default Home;