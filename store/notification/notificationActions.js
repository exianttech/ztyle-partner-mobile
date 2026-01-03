import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config 
import { Constants } from '@/config/constants';

export const addNotification = createAsyncThunk(
    'notification/addNotification',
    async ({ notification }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_notifications,
                notification
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

export const getNotifications = createAsyncThunk(
    'notification/getNotifications',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_notifications}/${id}`
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

export const readNotifications = createAsyncThunk(
    'notification/readNotifications',
    async ({ id }, { rejectWithValue }) => {
        
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_read_notifications}/${id}`
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

