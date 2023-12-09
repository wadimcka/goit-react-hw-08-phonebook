import { createSlice } from '@reduxjs/toolkit';

import {
  handlRejected,
  handleAddContactThunkFulfield,
  handleDeleteContactThunkFulfield,
  handleFetchAllContactsThunkFulfield,
  handleFulfilled,
  handlePending,
} from './helpers';
import {
  addContactThunk,
  fetchAllContactsThunk,
  deleteContactThynk,
} from '../contacts/operations.js';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(
        fetchAllContactsThunk.fulfilled,
        handleFetchAllContactsThunkFulfield
      )
      .addCase(addContactThunk.fulfilled, handleAddContactThunkFulfield)
      .addCase(deleteContactThynk.fulfilled, handleDeleteContactThunkFulfield)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handlRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
