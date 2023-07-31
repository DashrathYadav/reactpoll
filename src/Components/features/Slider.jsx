import React from "react";
import user from "../../assets/user.png";
import analysis from "../../assets/analysis.png";

// import { GiHamburgerMenu } from "react-icons/fa";
// import { MdOutlineCreateNewFolder } from "react-icons/fa";
// import { AiFillHome } from "react-icons/fa";
// import { CgProfile } from "react-icons/fa";
// import { SiGoogleanalytics } from 'react-icons/fa';
import "./Slider.css";
import { SliderItems } from "./SliderItems";

function Slider() {

  const toggle=(e)=>{
      const sliderItem=document.getElementById('SliderItem')
      const slider=document.getElementById('Slider')
      const hamburger=document.getElementById('hamburger')
      if (sliderItem.classList.contains('Slider--hidden'))
      {
        sliderItem.classList.remove('Slider--hidden');
        slider.classList.remove('Slider--slide');
        hamburger.classList.remove('Slider--hamburger--adjust');
        }
        else{  
          sliderItem.classList.add('Slider--hidden');
          slider.classList.add('Slider--slide');
          hamburger.classList.add('Slider--hamburger--adjust');
      }
  }

  return (
    <div id="Slider"  className="Slider Slider--slide">
        <h1 id="hamburger" className="Slider--hamburger Slider--hamburger--adjust" onClick={toggle}> <b> &#60; </b> </h1>
      <div id="SliderItem" className="Slider--items Slider--hidden">
        <SliderItems name={"Profile"} iconUrl={user}/>
        <SliderItems name={"Analytics"} iconUrl={analysis}/>
        <SliderItems name={"Filter"} iconUrl={user}/>
        
      </div>
    </div>
  );
}

export default Slider;
