import React from "react";
import user from "../../assets/user.png";
import analysis from "../../assets/analysis.png";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";

// import { GiHamburgerMenu } from "react-icons/fa";
// import { MdOutlineCreateNewFolder } from "react-icons/fa";
// import { AiFillHome } from "react-icons/fa";
// import { CgProfile } from "react-icons/fa";
// import { SiGoogleanalytics } from 'react-icons/fa';
import "./Slider.css";
import { SliderItems } from "./SliderItems";
import { useSelector } from 'react-redux'

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

  let profileUrl = useSelector((state) => {
    return state.component.profileUrl;
  });

  const dispatch = useDispatch();
  const handleClick = (e) => {
    const type= e.target.attributes.getNamedItem('action').value;
    dispatch({
      type:type,
      featureSection:"profile",
    })
  };

  return (
    <div id="Slider"  className="Slider Slider--slide">
        <span id="hamburger" className="Slider--hamburger Slider--hamburger--adjust" onClick={toggle}> <b className="arrowSymbol"> &#60; </b> </span>
      <div id="SliderItem" className="Slider--items Slider--hidden">
       <img className="Slider--profilePic" src={profileUrl || user} alt="profile pic" width={100} action="setFeatureSection" onClick={handleClick} />
        <SliderItems name={"Analytics"} iconUrl={analysis}/>
        <SliderItems name={"polls"} iconUrl={logo}/>
        
      </div>
    </div>
  );
}

export default Slider;
