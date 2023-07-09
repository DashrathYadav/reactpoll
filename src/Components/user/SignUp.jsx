import React from 'react'
import './user.css'
import profile from '../../assets/profile.png'
function SignUp(){
    return(
        <>
        <div className='MainContainer'>
                <h1>Sign Up</h1>
                <div className='imagecontainer'>
                    <img className='profile' src={profile} alt="profile image"></img>
                    <h4 className='profiletext'>Profile Picture</h4>
                </div>
                <div className='form'>
                    <input type='text' id="name" placeholder='Name'></input><br></br>
                    <input type='email' id="email" placeholder='Email'></input><br></br>
                    <input type='password' id="password" placeholder='Password'></input><br></br>
                   
                </div>
                <button type='submit' >Submit</button>
                
        </div>
        </>
    );
}
export default SignUp;