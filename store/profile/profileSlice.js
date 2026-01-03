import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    getProfile,
    addProfile,
    updateProfile,
    updateProfilePic,
    deleteProfilePic,
    deleteProfile
} from './profileActions'

const initialState = {
    loading: false,
    profile: null,
    error: null,
    success: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetProfile: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // get profile
            .addCase(getProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(getProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.error = null
                state.success = false
            })
            .addCase(getProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.profile = null
                state.success = false
            })
        
            // add profile           
            .addCase(addProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(addProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.error = null
                state.success = true
            })
            .addCase(addProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
            // update profile
            .addCase(updateProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(updateProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.error = null
                state.success = true
            })
            .addCase(updateProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
            
            // update profile pic
            .addCase(updateProfilePic.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(updateProfilePic.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = null
                state.profile = payload
                state.success = false
            })
            .addCase(updateProfilePic.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
            
            // delete profile pic
            .addCase(deleteProfilePic.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(deleteProfilePic.fulfilled, (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.error = null
                state.success = false
            })
            .addCase(deleteProfilePic.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })

            // delete profile
            .addCase(deleteProfile.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = true
            })
            .addCase(deleteProfile.fulfilled, (state) => {
                state.loading = false
                state.profile = null
                state.error = null
                state.success = true
            })
            .addCase(deleteProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.success = false
            })
        
    }

})

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer
