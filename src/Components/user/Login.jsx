import React, { useState } from "react";
import "./user.css";
import axios from "axios";
import profile from "../../assets/profile.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SignUp from "./SignUp";

function Login() {
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("http://localhost:3000/userLogin", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setPageSignup = (e) => {
    console.log("login clicked");
    dispatch({
      type: "setPage",
      page: "signup",
    });
  };

  //   ------------- handiling ripple button

  const loginBtn = <a className="btn"  onMouseOver={(e)=>{

        const btnEl=e.target;
        console.log(btnEl);
        e.target.addEventListener("mouseover", (event) => {
              const x = event.pageX - btnEl.offsetLeft;
              const y = event.pageY - btnEl.offsetTop;
        
              btnEl.style.setProperty("--xPos", x + "px");
              btnEl.style.setProperty("--yPos", y + "px");
            });
  }} onClick={handleSignIn}><span>Login</span></a>;



  return (
    <div className="MainContainer">
      <h1>Login</h1>
      <div className="imagecontainer">
        <img className="profile" src={profile} alt="profile image"></img>
      </div>
      <div className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        ></input>
        <br></br>
      </div>
        {loginBtn}
      <div className="Login--signup">
        <li>
          Not have Accoutnt? <u onClick={setPageSignup}> <span className="Login--signup-span">sign up</span></u>
        </li>
      </div>
    </div>
  );
}
export default Login;
