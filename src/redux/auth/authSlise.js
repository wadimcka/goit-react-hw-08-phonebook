import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registrThunk,
} from './operations';
import {
  handlLogOutThunkFulfilled,
  handlRefreshThunkFulfilled,
  handlRegistrThunkFulfilled,
  handllogInThunkFulfilled,
} from './helpers';

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
      .addCase(registrThunk.fulfilled, handlRegistrThunkFulfilled)
      .addCase(logInThunk.fulfilled, handllogInThunkFulfilled)
      .addCase(refreshUserThunk.fulfilled, handlRefreshThunkFulfilled)
      .addCase(logOutThunk.fulfilled, handlLogOutThunkFulfilled)

      .addCase(registrThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logInThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
      })

      .addCase(registrThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logInThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
