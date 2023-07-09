import React,{useState} from 'react'
import './user.css'
import axios from "axios";
import profile from "../../assets/profile.png"

function Login(){
    const [formData,setformData] = useState({
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
    const handleSignUp=(event)=>{
        event.preventDefault();
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        };
        axios.post('http://localhost:3000/userLogin', data, {
        headers: {"Access-Control-Allow-Origin": "*"}
        }).then((response)=>{
            console.log(response.status)
            if(response.status===200){
                console.log("success")
            }
            
        })
        .catch((error)=>{
                console.log(error)
        });

    }

    return(
        <>
        <div className='MainContainer'>
                <h1>Login</h1>
                <div className='imagecontainer'>
                    <img className='profile' src={profile} alt="profile image"></img>
                </div>
                <div className='form'>
                <input type='email' name="email" placeholder='Email' value={formData.email}
              onChange={handleInputChange}></input><br></br>
                    <input type='password' name="password" placeholder='Password' value={formData.password}
              onChange={handleInputChange}></input><br></br>
                   
                </div>
                <button type='submit' onClick={handleSignUp}>Sign In</button>
                
        </div>
        </>
    );
}
export default Login;