import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function LoginNavbar() {
  const dispatch = useDispatch();

  const setPageLogin = (e) => {
    console.log("login clicked");
    dispatch({
      type: "setPage",
      page: "login",
    });
  };

  const setPageHome = (e) => {
    console.log("login clicked");
    dispatch({
      type: "setPage",
      page: "home",
    });
  };

  return (
    <div>
      <nav className="Navbar--navbar">
        <div className="Navbar--logoSpace">
          <img className="Navbar--logo" src={logo} width={90}></img>
        </div>
        <div className="Navbar--list">
          <button className="Navbar--li" onClick={setPageLogin}>
            Login
          </button>
          <button className="Navbar--li" onClick={setPageHome}>
            home
          </button>
          <button className="Navbar--li">About</button>
          <button className="Navbar--li">Contact</button>
        </div>
      </nav>
    </div>
  );
}

export default LoginNavbar;
