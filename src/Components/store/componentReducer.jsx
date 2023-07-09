import { createReducer } from "@reduxjs/toolkit";

const initialState={
    loginStatus:false,
    page:"login",
    loginId:"",
};

const componentReducer= createReducer(initialState,{
    setPage:(state,payload)=>{
        state.loginStatus=payload.page;
    },
    setlogin:(state,payload)=>{
        state.loginStatus=true;
    },
    setlogout:(state,payload)=>{
        state.loginStatus=false;
    },
    setloginId:(state,payload)=>{
        state.loginId=payload.id;
    }
})

export default componentReducer;