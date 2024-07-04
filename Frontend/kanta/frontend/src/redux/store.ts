import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import adminSlice from '../slices/adminSlice';
import bookingSlice from '../slices/bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    booking:bookingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;