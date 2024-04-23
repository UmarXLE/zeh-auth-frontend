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
            const {data} = await axiosInstance.post("auth/register" , props)
            return data
        } catch (error) {
            return rejectWithValue(error?.detail)
        }
    }
)

export const getRolesList = createAsyncThunk(
    "admin/getRolesList",
    async(_,{rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.get("roles")
            return data
        } catch (error) {
            return rejectWithValue(error?.detail)
        }
    }
)

export const getZehsList = createAsyncThunk(
    "admin/getZehsList",
    async(_,{rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.get("zehs")
            return data
        } catch (error) {
            return rejectWithValue(error?.detail)
        }
    }
)

export const createRole = createAsyncThunk(
    'admin/createRole',
    async(props,{rejectWithValue}) => {
        try {
            const {data} = await axiosInstance.post("roles" , props)
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
        create_user_status:"",
        getRolesList_status:"",
        getZehsList_status:"",
        create_role_status:"",

        roles:[],
        zehs_list:[]
    },
    reducers: {
        clearStatus:(state) => {
            state.create_zehs_status = ""
            state.create_user_status = ""
            state.getRolesList_status = ""
            state.getZehsList_status = ""
            state.create_role_status = ""
            
        }
    },
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
        // ------------------------------------------------------ //
        .addCase(getRolesList.pending, (state) => {
            state.getRolesList_status = "pending"
        })
        .addCase(getRolesList.fulfilled, (state, {payload}) => {
            state.getRolesList_status = "success"
            state.roles = payload
        })
        .addCase(getRolesList.rejected, (state, {payload}) => {
            state.getRolesList_status = "rejected"
        })
        // ------------------------------------------------------ //
        .addCase(getZehsList.pending, (state) => {
            state.getZehsList_status = "pending"
        })
        .addCase(getZehsList.fulfilled, (state, {payload}) => {
            state.getZehsList_status = "success"
            state.zehs_list = payload
        })
        .addCase(getZehsList.rejected, (state, {payload}) => {
            state.getZehsList_status = "rejected"
        })
        // ------------------------------------------------------ //
        .addCase(createRole.pending, (state) => {
            state.create_role_status = "pending"
        })
        .addCase(createRole.fulfilled, (state, {payload}) => {
            state.create_role_status = "success"
        })
        .addCase(createRole.rejected, (state, {payload}) => {
            state.create_role_status = "rejected"
        })
    }
})

export const {clearStatus} = adminSlice.actions
export {adminSlice}