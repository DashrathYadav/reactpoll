import React,{useState} from 'react'
import './user.css'
import axios from "axios";
import profile from '../../assets/profile.png'
function SignUp(){
    
    const [formData,setformData] = useState({
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
    const handleSignUp=(event)=>{
        event.preventDefault();
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        };
        axios.post('http://localhost:3000/createUser', data, {
        headers: {"Access-Control-Allow-Origin": "*"}
        }).then((response)=>{
            console.log(response.status)
            if(response.status===201){
                console.log("success")
            }
            
        })
        .catch((error)=>{
                console.log(error.message)
        });

    }
    return(
        <>
        <div className='MainContainer'>
                <h1>Sign Up</h1>
                <div className='imagecontainer'>
                    <img className='profile' src={profile} alt="profile image"></img>
                    <h4 className='profiletext'>Profile Picture</h4>
                </div>
                <div className='form'>
                    <input type='text' name="name" placeholder='Name' value={formData.name}
              onChange={handleInputChange}></input><br></br>
                    <input type='email' name="email" placeholder='Email' value={formData.email}
              onChange={handleInputChange}></input><br></br>
                    <input type='password' name="password" placeholder='Password' value={formData.password}
              onChange={handleInputChange}></input><br></br>
                   
                </div>
                <button type='submit' onClick={handleSignUp}>Submit</button>
                
        </div>
        </>
    );
}
export default SignUp;