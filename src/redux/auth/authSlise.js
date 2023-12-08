import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registrThunk,
} from './operations';

const authInitialState = {
  userData: null,
  token: null,
  isRefreshing: false,
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registrThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registrThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(registrThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logInThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(logInThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUserThunk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.authenticated = true;
        state.userData = payload;
      })
      .addCase(refreshUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = true;
        state.error = payload;
      })
      .addCase(logOutThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = false;
        state.token = null;
        state.userData = null;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
