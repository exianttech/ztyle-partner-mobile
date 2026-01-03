import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

// reducers
import authReducer from './auth/authSlice';
import profileReducer from './profile/profileSlice';
import bookingReducer from './booking/bookingSlice';
import paymentReducer from './payment/paymentSlice';
import notificationReducer from './notification/notificationSlice';
import reviewReducer from './review/reviewSlice';

// config for store
const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
    whitelist: ['auth'],
    version: 1 
}


// combine all reducers to single

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    booking: bookingReducer,
    payment: paymentReducer,
    notification: notificationReducer,
    review: reviewReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these redux-persist actions
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production', // 🔥 Enables Redux DevTools in development
})

export const persistor = persistStore(store)