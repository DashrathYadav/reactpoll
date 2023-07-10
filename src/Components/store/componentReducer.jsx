import { createReducer } from "@reduxjs/toolkit";

const initialState={
    loginStatus:false,
    page:"landing",
    loginId:"",
    name:"",
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