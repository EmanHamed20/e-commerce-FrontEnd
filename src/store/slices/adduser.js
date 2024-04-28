import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './../../axios/instance';

// Async thunk action to add a new user
export const addUser = createAsyncThunk(
  'user/addUser',
  async (userData) => {
    try {
      console.log(userData)
      console.log(instance)
      const response = await instance.post('/user/signup', userData);
      alert("user created successfuly")
      return response.data;

    } catch (error) {
      throw error;
    }
  }
);

// Create a slice to manage user state
const userSlice = createSlice({
  name: 'user',
  initialState: {
    newUser: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.newUser = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer generated by createSlice
export default userSlice.reducer;
