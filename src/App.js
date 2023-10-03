import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './component/Footer';
import Home from './component/Home';
import {Route, Routes} from "react-router-dom";
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Navbar from './component/Navbar';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/service' Component={Service}/>
      <Route path='/contact' Component={Contact}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App;