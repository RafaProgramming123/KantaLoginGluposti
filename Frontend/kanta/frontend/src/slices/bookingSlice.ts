import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../redux/store';

interface BookingFormData {
  wasteTypeName: string | undefined;
  quantity: string;
  date: string;
  priority: boolean;
  subTypes: string[];
}

interface BookingState {
  bookings: BookingFormData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  status: 'idle',
  error: null,
};

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (bookingData: BookingFormData, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.auth.token; // Access the token from the Redux state

    try {
      const response = await axios.post('http://localhost:8006/bookings', bookingData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default bookingSlice.reducer;
