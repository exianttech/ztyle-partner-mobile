import { createAsyncThunk } from '@reduxjs/toolkit';

// config
import { Constants } from '@/config/constants';
import axiosInstance from '@/config/axiosInstance';

export const getProfile = createAsyncThunk(
    'profile/getProfile',

    async ({ email }, { rejectWithValue }) => {
        
        try {
            const profileData = { email };
            const { data } = await axiosInstance.post(
                Constants.url_my_profile,
                profileData
            )
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

export const addProfile = createAsyncThunk(
    'profile/addProfile',
    async ({ profileData }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(
                Constants.url_profiles,
                profileData
            )
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

export const updateProfile = createAsyncThunk(
    'profile/updateProfile',

    async ({ profileData }, { rejectWithValue }) => {
        
        const id = profileData.id;

        try {
            const { data } = await axiosInstance.patch(
                `${Constants.url_profiles}/${id}`,
                profileData
            )
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

export const updateProfilePic = createAsyncThunk(
    'profile/updateProfilePic',
    async ({ profileData, _id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.patch(
                `${Constants.url_beautician_profiles_profile_pic}/${_id}`,
                profileData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
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

export const deleteProfilePic = createAsyncThunk(
    'profile/deleteProfilePic',
    async ({ _id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.delete(
                `${Constants.url_beautician_profiles_profile_pic}/${_id}`
            )
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

export const deleteProfile = createAsyncThunk(
    'profile/deleteProfile',
    async ({ id }, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`${Constants.url_profiles}/${id}`)
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