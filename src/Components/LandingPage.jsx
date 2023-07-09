import React from 'react';
import Navbar from './header/Navbar';
import coverPage from "../assets/LandingCoverPage.jpg";
import "./LandingPage.css"
import LoginNavbar from './header/LoginNavbar';


function LandingPage() {
  return (
    <div className='LandingPage--outer'>
    {/* <Navbar/> */}
    <LoginNavbar/>
    <img className='LandingPage--img' src={coverPage} alt='Landing Page' ></img>
    </div>
  )
}

export default LandingPage