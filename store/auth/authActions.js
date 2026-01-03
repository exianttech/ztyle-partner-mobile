import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// urls
import { Constants } from '@/config/constants';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const registerBeautician = createAsyncThunk(
    'auth/register',
    async ({ fullName, shopId, mobile, email, password }, { rejectWithValue }) => {
        
        try {
            await axios.post(
                Constants.url_register,
                { fullName, shopId, mobile, email, password },
                config
            )
            
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

export const getShopIds = createAsyncThunk(
    'auth/getShopIds',
    async ({ type }, { rejectWithValue }) => {
        
        try {
            const { data } = await axios.get(
                Constants.url_shop_ids,
                config
            )
            
            if (data) {
                return data;
            } 
            else {
                return null;
            }
            
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

export const beauticianLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        
        try {
            const { data } = await axios.post(
                Constants.url_login,
                { email, password },
                config
            )

            await AsyncStorage.setItem('token', data.token)
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

export const requestResetPassword = createAsyncThunk(
    'auth/requestResetPassword',
    async ({ email }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                Constants.url_request_reset_password,
                { email },
                config
            )

            if (data) {
                return data;
            }
            else {
                return null;
            }
            
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