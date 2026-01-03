import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from './constants';

const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach JWT token from AsyncStorage automatically

axiosInstance.interceptors.request.use(

    async (config) => {
        const token = await AsyncStorage.getItem('token'); // persisted by redux-persist
        
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config;

    },
    (error) => Promise.reject(error)
)

export default axiosInstance