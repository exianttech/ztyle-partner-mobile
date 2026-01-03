import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config 
import { Constants } from '@/config/constants';

export const getBookingsByBeautician = createAsyncThunk(
    'booking/getBookingByBeautician',
    async ({ searchData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_my_bookings,
                searchData
            )
            if (!data) return null;
            return data;
            
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)

export const getBookingById = createAsyncThunk(
    'booking/getBookingById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_bookings}/${id}`
            )
            if (!data) return null;
            return data;
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)

export const changeBookingStatusByBeauticianById = createAsyncThunk(
    'booking/changeBookingStatusByBeautician',
    async ({ id, bookingData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.patch(
                `${Constants.url_bookings}/${id}`,
                bookingData
            )
            if (!data) return null;
            return data;
            
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)

