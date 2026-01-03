import { createSlice } from '@reduxjs/toolkit';

// actions
import { getPaymentByBookingId } from './paymentActions';

const initialState = {
    loadingPayment: false,
    payments: null,
    currentPayment:null,
    errorPayment: null
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        resetPayment: () => initialState
    },
    extraReducers: (builder) => {
        builder

            // get payment by booking id   
            .addCase(getPaymentByBookingId.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPaymentByBookingId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.currentPayment = payload
                state.error = null
            })
            .addCase(getPaymentByBookingId.rejected, (state, { payload }) => {
                state.loading = false
                state.currentPayment = null
                state.error = payload
            })
    }
})


export const { resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer
