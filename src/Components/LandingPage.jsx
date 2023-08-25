import React from "react";
import Navbar from "./header/Navbar";
import coverPage from "../assets/LandingCoverPage.jpg";
import "./LandingPage.css";
import LoginNavbar from "./header/LoginNavbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function LandingPage() {
  // var pos = document.documentElement;
  // pos.addEventListener("mousemove", (e) => {
  //   pos.style.setProperty("--x", e.clientX + "px");
  //   pos.style.setProperty("--y", e.clientY + "px");
  // });

  return (
    <div className="LandingPage--outer">
      <div>
        <img
          className="LandingPage--img"
          src={coverPage}
          alt="Landing Page"
        ></img>
      </div>
      <div className="LandingPage--light"></div>
    </div>
  );
}

export default LandingPage;
