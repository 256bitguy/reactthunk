import { configureStore } from "@reduxjs/toolkit";
import userDetails  from "../features/userDetailSlice";
// import gitUser from '../features/gitUserSlice';
export const store=configureStore(
    {
        reducer:{
            app:userDetails,
        },
    }
)  

//slice is used to write logic for actions and reducers