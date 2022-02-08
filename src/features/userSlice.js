import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {

  user: null,
};



export const counterSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },

  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

  },

});

export const { login,logout } = counterSlice.actions;

//to pull info
export const selectUser = (state) => state.user.user;


export default counterSlice.reducer;
