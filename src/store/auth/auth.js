import axiosInstance from "@/services/axios";
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
// requests 

export const LoginFetch = createAsyncThunk(
    "auth/login",
    async(props,{rejectWithValue}) => {
        try {
            console.log("success request");
            const {data} = await axiosInstance.post("auth/login" , props)
            // Cookies.set('token', data?.access_token, { expires: 7 });
            // Cookies.set('role', data?.role, { expires: 7 });
            console.log("data login=",data);
            Cookies.set("role", data?.role, { expires: 7 });
            Cookies.set("token", data?.token, { expires: 7 });
            return data
        } catch (error) {
            return rejectWithValue(error?.detail)
        }
    }
)


// slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        role:"",
        token: null,
        login_status:"",
        login_message:"",
        
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(LoginFetch.pending, (state) => {
            state.login_status = "pending"
        })
        .addCase(LoginFetch.fulfilled, (state, {payload}) => {
            state.login_status = "success"
            state.role = payload?.role
        })
        .addCase(LoginFetch.rejected, (state, {payload}) => {
            state.login_status = "rejected"
            state.login_message = payload
        })
    }
})

export {authSlice}