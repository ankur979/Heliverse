import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import teamSlice from "./teamSlice";

const store = configureStore({
    reducer:{
        users:userSlice,
        teams:teamSlice
    }
})

export default store;