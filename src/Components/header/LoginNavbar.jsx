import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <div>
      <nav className="Navbar--navbar">
        <logo className= "Navbar--logoSpace">
          <img className="Navbar--logo" src={logo} width={90} ></img>
        </logo>
        <list className="Navbar--list" >
        <li className="Navbar--li">Login</li>
          <li className="Navbar--li">home</li>
          <li  className="Navbar--li">About</li>
          <li  className="Navbar--li">Contact</li>
        </list>
      </nav>
    </div>
  );
}

export default Navbar;
