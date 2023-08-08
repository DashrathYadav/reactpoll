import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import profile from "../../assets/profile.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function SignUp() {
    const dispatch= useDispatch();

    const sharedPollStatus= useSelector((state)=>{
      return state.component.sharedPollStatus;
    })
    console.log("shared Poll Status",sharedPollStatus);
    
    
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();


  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    const file= new FormData();
     file.append("profileimage",selectedFile);
      file.append("name",formData.name);
      file.append("email",formData.email);
      file.append("password",formData.password);


     console.log(selectedFile);

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    

    axios
      .post("https://reactpollbackend.onrender.com/createUser",file,{
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
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
              type:"SetProfileUrl",
              profileUrl: response.data.result.profileUrl,
            })
            dispatch({
                type: "setPage",
                page: "home",
              });
            
             

          console.log("success");

          if(sharedPollStatus)
          {
            console.log("current url of page ",window.location.href);
            window.location.replace("/");
          }

        }
      })
      .catch((error) => {
        // console.log(error.message);

        console.log(error);
        if (error.response && error.response.status === 500) {
          setErrorMessage("An error occurred. Please try again later."); // Set the error message
        } else {
          setErrorMessage(error.response.data.msg); // Other error handling if needed
        }

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


  // handling proflie select dialogbox trigger
  const triggerImageSelect=(e) =>
  {
      document.getElementById("profileimage").click();
  }


  // handeling image selectd url;

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        console.log("objectUrl =",objectUrl);
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

  return (
    <>
      <div className="MainContainer">
        <h1>Sign Up</h1>
        <div className="imagecontainer">
        <input type="file" name="profileimage" id="profileimage" onChange={onSelectFile} required />
          <img className="profile" src={preview || profile} alt="profile image" onClick={triggerImageSelect} ></img>
          <h4 className="profiletext">Profile Picture</h4>
        </div>

        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <input
            type="email"
            name="email"
            required
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
            required
            minLength={6}
            onChange={handleInputChange}
          ></input>
        </div>
          {errorMessage && <div className="Login--error-message">{errorMessage}</div>}
        {loginBtn}
      </div>
    </>
  );
}
export default SignUp;
