import { configureStore } from "@reduxjs/toolkit";
import SettingSlice from "../redux/SettingSlice";

const store = configureStore({
    
    reducer:{
        item : SettingSlice
    }
})

export default store
