import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function LoginNavbar() {
  const dispatch = useDispatch();

  //currently checking login status by name but later on change to loginStatus
  const userName = useSelector((state) => {
    return state.component.name;
  });

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

  const createPoll = (e) => {
    dispatch({
      type:"setPage",
      page:"createNewPoll",
    })
  };

  return (
    <div>
      <nav className="Navbar--navbar">
        <div className="Navbar--logoSpace">
          <img className="Navbar--logo" src={logo} width={90}></img>
        </div>
        <div className="Navbar--list">
          {/* conditonal redering between name and login button*/}

          {userName === "" ? (
            <button className="Navbar--button" onClick={setPageLogin}>
              Login
            </button>
          ) : (
            <>
              <li className="Navbar--button Navbar--li">{userName}</li>
              <button className="Navbar--button" onClick={createPoll}>
                + New
              </button>
            </>
          )}

          <button className="Navbar--button" onClick={setPageHome}>
            home
          </button>
          <button className="Navbar--button">About</button>
          <button className="Navbar--button">Contact</button>
        </div>
      </nav>
    </div>
  );
}

export default LoginNavbar;
