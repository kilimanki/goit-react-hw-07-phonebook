import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(addContacts.rejected, (state, payload) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== payload
        );
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export default contactsSlice.reducer;
