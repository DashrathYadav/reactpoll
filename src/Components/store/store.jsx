import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./componentReducer";
import componentReducer from "./componentReducer.jsx"
// import pollDataReducer from "./pollDataReducer.jsx"

const store= configureStore({
    reducer:{
        component:componentReducer,
        // pollData:pollDataReducer,  
    }
});

export default store;
