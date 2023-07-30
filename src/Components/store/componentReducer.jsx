import { createReducer } from "@reduxjs/toolkit";
import { render } from "react-dom";
//Dummy login data on dashrath mongoDb
//Dashrath
// 64ad04dca8cb4edcfc1484a2
//name rough
//loginStatus:true

const initialState={
    loginStatus:false,
    page:"landing",
    loginId:"",
    name:"",
    scrollPos:0,
    renderPollUI:false,
    pollData:"",
};

const componentReducer= createReducer(initialState,{
    setPage:(state,payload)=>{
        console.log(payload);
        state.page=payload.page;
        console.log(state.page)
    },
    setlogin:(state,payload)=>{
        state.loginStatus=true;
    },
    setlogout:(state,payload)=>{
        state.loginStatus=false;
    },
    setloginId:(state,payload)=>{
        state.loginId=payload._id;
        
    },
    setUserName:(state,payload)=>{
        state.name=payload.name;
    },
    setrenderPollUI :(state,payload)=>
    {
        console.log("payload.pollClickedData",payload.pollClickedData)
        state.pollData=payload.pollClickedData
        state.renderPollUI= !state.renderPollUI;
    },
    setAnalytics :(state,payload)=>{
        console.log("Visulize clicked")
        state.pollData = payload.pollClickedData
        state.renderAnalytics = state.renderAnalytics;
    }
       
})

export default componentReducer;