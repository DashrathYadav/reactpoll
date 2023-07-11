import React, { useState } from "react";
import "./user.css";
import axios from "axios";
import profile from "../../assets/profile.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function SignUp() {
    const dispatch= useDispatch();
    
  const [formData, setformData] = useState({
    name: "",
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
  const handleSignUp = (event) => {
    event.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("http://localhost:3000/createUser", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response.status);

        //checking user signup and updating id and name in store
        if (response.status === 201) {
            console.log(response.data.result._id)

            dispatch({
                type:"setloginId",
                _id:response.data.result._id,
            });
            dispatch({
                type:"setUserName",
                name:response.data.result.name,
            });
            dispatch({
                type: "setPage",
                page: "home",
              });
            

          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    // ---------- handling ripple btn
    const loginBtn = <a className="btn SignUp--lessMargine" onMouseOver={(e)=>{

        const btnEl=e.target;
        e.target.addEventListener("mouseover", (event) => {
              const x = event.pageX - btnEl.offsetLeft;
              const y = event.pageY - btnEl.offsetTop;
        
              btnEl.style.setProperty("--xPos", x + "px");
              btnEl.style.setProperty("--yPos", y + "px");
            });
  }} onClick={handleSignUp}><span>Submit</span></a>;

  return (
    <>
      <div className="MainContainer">
        <h1>Sign Up</h1>
        <div className="imagecontainer">
          <img className="profile" src={profile} alt="profile image"></img>
          <h4 className="profiletext">Profile Picture</h4>
        </div>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
          <br></br>
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
        </div>
        {loginBtn}
      </div>
    </>
  );
}
export default SignUp;