import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./componentReducer";
import componentReducer from "./componentReducer.jsx"

const store= configureStore({
    reducer:{
        component:componentReducer,
      
    }
});

export default store;
