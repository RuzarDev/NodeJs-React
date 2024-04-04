import {configureStore} from "@reduxjs/toolkit";
import toggleReducer from '../app/toggleSlice'
import authUserReducer from "../app/userSlice";

export default  configureStore({
    reducer:{
        Dark: toggleReducer,
        AuthUser:authUserReducer,
    }
})