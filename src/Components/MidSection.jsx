import React from "react";
import "./MidSection.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LandingPage from "./LandingPage";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import PollContainer from "./poll/pollContainer";

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
  } else if (page === "home") {
    midSection=<PollContainer/>
    console.log("home");
  }
  else if(page==="signup"){
    midSection= <SignUp/>
  }
  

  return <div className="MidSection--container">
    {midSection}
  </div>;
}

export default MidSection;