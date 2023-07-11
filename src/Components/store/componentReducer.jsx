import { createReducer } from "@reduxjs/toolkit";
//Dummy login data on dashrath mongoDb
//Dashrath
// 64ad04dca8cb4edcfc1484a2

const initialState={
    loginStatus:false,
    page:"landing",
    loginId:"64ad04dca8cb4edcfc1484a2",
    name:"rough",
    scrollPos:0
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
    }
})

export default componentReducer;