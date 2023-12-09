import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getLogInUser,
  getLogOutUser,
  getRegistrUser,
  refreshCurrentUser,
  setToken,
  unsetToken,
} from 'api/api';

export const registrThunk = createAsyncThunk(
  'auth/registr',
  async (userData, thunkAPI) => {
    try {
      const responce = await getRegistrUser(userData);
      setToken(responce.token);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const responce = await getLogInUser(userData);
      setToken(responce.token);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setToken(persistedToken);
      const responce = await refreshCurrentUser();
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) {
        toast.warn(
          'You are not registered or have logged out of the system. Register or log in, please!'
        );
        return false;
      }
      return true;
    },
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const responce = await getLogOutUser();
      unsetToken(null);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
