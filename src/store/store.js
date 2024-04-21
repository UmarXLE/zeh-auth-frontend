import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth";
import { adminSlice } from "./admin/adminSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        admin: adminSlice.reducer
    },
})