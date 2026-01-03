import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/config/axiosInstance';

// config
import { Constants } from '@/config/constants';

export const getBeauticianReviews = createAsyncThunk(
    'review/getBeauticianReviews',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(
                `${Constants.url_beautician_reviews_by_beautician}/${id}`
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