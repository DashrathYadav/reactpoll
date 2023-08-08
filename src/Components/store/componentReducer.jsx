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
    sharedPollStatus:false,
    profileUrl:"",
    featureSection:"polls",
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
        state.loginId="";
        state.loginStatus=false;
        state.page="landing";
        state.name="";
        state.pollData="";

    },
    setloginId:(state,payload)=>{
        state.loginId=payload._id;
        state.loginStatus=true;
        
        
    },
    setUserName:(state,payload)=>{
        state.name=payload.name;
    },
    setrenderPollUI :(state,payload)=>
    {
        console.log("payload.pollClickedData",payload.pollClickedData)
        state.renderPollUI= !state.renderPollUI;
        if(state.renderPollUI===false)
        state.pollData="";
        else
        state.pollData=payload.pollClickedData
    },
    setAnalytics :(state,payload)=>{
        console.log("Visulize clicked")
        state.pollData = payload.pollClickedData
        state.renderAnalytics = state.renderAnalytics;
    },

    SetProfileUrl :(state,payload)=>{
        console.log("profile is setted",payload.profileUrl);
        state.profileUrl=payload.profileUrl;
    },

    setFeatureSection:(state,payload)=>{
        console.log("settting feature section to ",payload.featureSection);
        state.featureSection=payload.featureSection;
    }
       
})

export default componentReducer;