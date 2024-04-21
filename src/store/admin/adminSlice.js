import axiosInstance from "@/services/axios";
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


// requests

export const createZehs = createAsyncThunk(
    "admin/createZehs",
    async(props,{rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.post("zehs" , props)
            return data
        } catch (error) {
            return rejectWithValue(error?.detail)
        }
    }
)

export const createUser = createAsyncThunk(
    "admin/createUser",
    async(props,{rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.post("user" , props)
            return data
        } catch (error) {
            return rejectWithValue(error?.detail)
        }
    }
)

// slice
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        create_zehs_status:"",
        create_user_status:""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createZehs.pending, (state) => {
            state.create_zehs_status = "pending"
        })
        .addCase(createZehs.fulfilled, (state, {payload}) => {
            state.create_zehs_status = "success"
        })
        .addCase(createZehs.rejected, (state, {payload}) => {
            state.create_zehs_status = "rejected"
        })
        // ------------------------------------------------------ //
        .addCase(createUser.pending, (state) => {
            state.create_user_status = "pending"
        })
        .addCase(createUser.fulfilled, (state, {payload}) => {
            state.create_user_status = "success"
        })
        .addCase(createUser.rejected, (state, {payload}) => {
            state.create_user_status = "rejected"
        })
    }
})

export {adminSlice}