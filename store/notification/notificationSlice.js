import { createSlice } from '@reduxjs/toolkit';

// actions
import {
    addNotification,
    getNotifications,
    readNotifications
} from './notificationActions';


const initialState = {
    loading: false,
    notifications: null,
    error: null
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        resetNotification: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // add notification
            .addCase(addNotification.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addNotification.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = null
            })
            .addCase(addNotification.rejected, (state, { payload }) => {
                state.loading = false
                state.error=payload
            })
            // get notifications
            .addCase(getNotifications.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getNotifications.fulfilled, (state, { payload }) => {
                state.loading = false
                state.notifications = payload
                state.error = null
            })
            .addCase(getNotifications.rejected, (state, payload) => {
                state.loading = false
                state.notifications = null
                state.error = payload
            })
            // read notifications
            .addCase(readNotifications.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(readNotifications.fulfilled, (state, { payload }) => {
                state.loading = false
                state.notifications = payload
                state.error = null
            })
            .addCase(readNotifications.rejected, (state, payload) => {
                state.loading = false
                state.notifications = null
                state.error = payload
            })
        
        
    }

})

export const { resetNotification } = notificationSlice.actions
export default notificationSlice.reducer
