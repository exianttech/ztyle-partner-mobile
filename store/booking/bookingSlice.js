import { createSlice } from '@reduxjs/toolkit';


// actions
import {
    getBookingsByBeautician,
    getBookingById,
    changeBookingStatusByBeauticianById
} from './bookingActions'

const initialState = {
    loading: false,
    bookings: null,
    currentBooking: null,
    error: null
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        resetBooking: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // get booking by beautician
            .addCase(getBookingsByBeautician.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getBookingsByBeautician.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookings = payload
                state.error = null
            })
            .addCase(getBookingsByBeautician.rejected, (state, { payload }) => {
                state.loading = false
                state.bookings = null
                state.error = payload
            })
        // get booking by id
            .addCase(getBookingById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getBookingById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBooking = payload
                state.error = false
            })
            .addCase(getBookingById.rejected, (state, { payload }) => {
                state.loading = false
                state.currentBooking = null
                state.error = payload
            })
            // change booking status  by beautician by  id
            .addCase(changeBookingStatusByBeauticianById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(changeBookingStatusByBeauticianById.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentBooking = payload
                state.error = null
            })
            .addCase(changeBookingStatusByBeauticianById.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
        
    }

})

export const { resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
