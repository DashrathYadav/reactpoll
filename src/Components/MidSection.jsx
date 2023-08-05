import React from "react";
import "./MidSection.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LandingPage from "./LandingPage";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import {PollContainer} from "./poll/PollContainer";
import PollForm from "./poll/pollForm";
import { About } from "./About";
import Analytics from "./Analytics/Analytics"
import Contact from "./Contact/Contact";

function MidSection() {

    //dummy array of poles


    let loginStatus = useSelector((state) => {
        return state.component.loginStatus;
      });

  let page = useSelector((state) => {
    return state.component.page;
  });

  let midSection;
  if (page === "landing") {
    midSection = <LandingPage />;
  } else if (page === "login") {
    midSection = <Login />;
  } 
  else if(page==="contact"){
    midSection = <><LandingPage/><Contact /></>
        
  }
  else if (page === "home") {
    midSection=<PollContainer/>
    console.log("home");
  }
  else if(page==="signup"){
    midSection= <SignUp/>
  }
  else if(page==="createNewPoll"){
    midSection=<PollForm/>
  }
  else if(page=== "about")
  {
    midSection=<About/>
  }
  else if(page==='Analytics'){
    midSection=<Analytics/>
  }
  

  return <div className="MidSection--container">
    {midSection}
    { window.scrollTo(0,400)}
    
  </div>;
}

export default MidSection;
