import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <div>
      <nav className="Navbar--navbar">
        <div className= "Navbar--logoSpace">
          <img className="Navbar--logo" src={logo} width={90} ></img>
        </div>
        <div className="Navbar--list" >
          <li className="Navbar--li">home</li>
          <li  className="Navbar--li">About</li>
          <li  className="Navbar--li">Contact</li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
