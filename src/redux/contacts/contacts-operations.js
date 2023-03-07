import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/booksAPI';
export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
