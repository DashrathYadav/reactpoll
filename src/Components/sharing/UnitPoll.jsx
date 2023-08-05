import React from 'react'
import axios from 'axios';
import PollingUi from '../poll/PollingUi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from "../user/Login"


export const UnitPoll = () => {

// to dispatch only once after rendering of component.
   const dispatch= useDispatch();
  //  useEffect(()=>{
  //   dispatch({
  //     type:"setsharedPollStatus",
  //     value:true,
  //   })
  //  },[]);



// getting poll id from url.
    const url=window.location.pathname;
    console.log(url)
    const arr=url.split("/");
    const pollId=arr[arr.length-1].toString();
    console.log("poll id found is",pollId);


    // checking if not login set sessionStorage data to poll id
    //render to login page.
    

    const loginStatus= sessionStorage.getItem("loginStatus")

     if( loginStatus !=="true")
     {
      sessionStorage.setItem('sharedPollId',pollId);
      return <Login/>
     }

    // getPoll
    let data= {
        question: "",
        options: [{ text: "", count: 0 }],
        category: "",
        subcategories: [], // Array to store subcategories
      };
    
     const [pollData,setPollData]=useState(data);


      let responseData;     
      
      useEffect(() => {

        axios
        .post("http://localhost:3000/getPoll",{pollId:pollId}, {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((response) => {
          console.log("response data is",response.data.poll);
          responseData=response.data.poll;
          console.log("useeffect data is",responseData);
          setPollData(responseData);
        })
        .catch((err) => {
          console.log(err);
        });
      }, []);
  

  return (
   <PollingUi pollClickedData={pollData}/> 
  )
}
