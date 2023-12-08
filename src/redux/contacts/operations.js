import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAddedContact, getAllContacts, getDeletedContact } from 'api/api';

export const fetchAllContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const persistedToken = state.auth.token;
      // setToken(persistedToken);
      const responce = await getAllContacts();
      if (responce.length < 0) {
        toast.success(
          'Unfortunately, your contact book does not have any desired entries.'
        );
      }
      toast.success(
        `There are ${responce.length} entries in your contact list !`
      );
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const persistedToken = state.auth.token;
      // setToken(persistedToken);
      const responce = await getAddedContact(contact);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThynk = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const persistedToken = state.auth.token;
      // setToken(persistedToken);
      const responce = await getDeletedContact(id);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
