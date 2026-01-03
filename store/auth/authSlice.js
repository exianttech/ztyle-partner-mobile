import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    registerBeautician,
    getShopIds,
    beauticianLogin,
    requestResetPassword
} from './authActions';



const initialState = {
    loading: false,
    beauticianInfo: null,
    shopIds:null,
    token: null,
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // register
            .addCase(registerBeautician.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(registerBeautician.fulfilled, (state) => {
                state.loading = false
                state.error = null
                state.success = true
            })
            .addCase(registerBeautician.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
            // get shopIds
            .addCase(getShopIds.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getShopIds.fulfilled, (state, { payload }) => {
                state.loading = false
                state.shopIds = payload
                state.error = null
                state.success = false
            })
            .addCase(getShopIds.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.shopIds = null
                state.success = false
            })
        
            // login
            .addCase(beauticianLogin.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(beauticianLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.beauticianInfo = payload
                state.token = payload.token
                state.error = null
                state.success = false
            })
            .addCase(beauticianLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
            // request reset
            .addCase(requestResetPassword.pending, (state) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(requestResetPassword.fulfilled, (state, { payload }) => {
                state.loading = false
                state.message = payload.message
                state.error = null
                state.success = false
            })
            .addCase(requestResetPassword.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
                
            })
        
        
        
    }

})

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
