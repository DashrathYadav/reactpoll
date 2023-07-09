import React from 'react';
import Navbar from './header/Navbar';
import coverPage from "../assets/LandingCoverPage.jpg";
import "./LandingPage.css"
import LoginNavbar from './header/LoginNavbar';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


function LandingPage() {
  return (
    <div className='LandingPage--outer'>
    <img className='LandingPage--img' src={coverPage} alt='Landing Page' ></img>
    </div>
  )
}

export default LandingPage