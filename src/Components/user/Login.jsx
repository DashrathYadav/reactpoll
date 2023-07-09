import React from 'react'
import './user.css'
import profile from "../../assets/profile.png"
function Login(){
    return(
        <>
        <div className='MainContainer'>
                <h1>Login</h1>
                <div className='imagecontainer'>
                    <img className='profile' src={profile} alt="profile image"></img>
                </div>
                <div className='form'>
                    <input type='email' id="email" placeholder='Email'></input><br></br>
                    <input type='password' id="password" placeholder='Password'></input><br></br>
                   
                </div>
                <button type='submit' >Sign In</button>
                
        </div>
        </>
    );
}
export default Login;