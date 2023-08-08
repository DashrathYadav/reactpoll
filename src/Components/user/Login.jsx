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

    setformData((prevData) => ({
      ...prevData,
      [event.target.name]:event.target.value,
    }));
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleSignIn = (event) => {
    event.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password,
    };
   console.log(data)

    axios
      .post("http://localhost:3000/userLogin", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
            console.log(response);

            sessionStorage.setItem("loginStatus","true")
            sessionStorage.setItem("loginId",response.data.result._id)
            sessionStorage.setItem("userName",response.data.result.name)
            sessionStorage.setItem("profileUrl",response.data.result.profileUrl)

            if(sessionStorage.getItem("sharedPollId"))
            {
              location.reload();
            }
          
            dispatch({
                type:"setloginId",
                _id:response.data.result._id,
            });
            dispatch({
                type:"setUserName",
                name:response.data.result.name,
            })
            dispatch({
              type:"SetProfileUrl",
              profileUrl: response.data.result.profileUrl,
            })
            dispatch({
                type: "setPage",
                page: "home",
              });
          console.log("success");
          
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 500) {
          setErrorMessage("Wrong password. Please try again."); // Set the error message
        } else {
          setErrorMessage("An error occurred. Please try again later."); // Other error handling if needed
        }
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
        {errorMessage && <div className="Login--error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}
export default Login;
