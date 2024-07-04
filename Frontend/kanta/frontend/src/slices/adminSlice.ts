import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../redux/store';
import { User } from '../interface/types';

interface AdminState {
  users: User[];
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AdminState = {
  users: [],
  token: null,
  status: 'idle',
  error: null,
};

export const loginAdmin = createAsyncThunk('admin/loginAdmin', async (loginData: { username: string; password: string }, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8006/admin/login', loginData);
    return { token: response.data };
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchUsers = createAsyncThunk('admin/fetchUsers', async (_, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const token = state.admin.token;

  try {
    const response = await axios.get('http://localhost:8006/admin/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logoutAdmin(state) {
      state.token = null;
      state.users = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to login';
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { logoutAdmin } = adminSlice.actions;
export const selectAdmin = (state: RootState) => state.admin;
export default adminSlice.reducer;