import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getProductThunk = createAsyncThunk('product/get', async () => {
  const response = await axios.get('http://localhost:7777/aranoz');
  return response.data;
});

const postProductThunk = createAsyncThunk('product/post', async (data) => {
  const response = await axios.post('http://localhost:7777/aranoz', data);
  return response.data;
});

const deleteProductThunk = createAsyncThunk('product/delete', async (id) => {
  const response = await axios.delete(`http://localhost:7777/aranoz/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'aranoz',
  initialState: {
    product: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.aranoz = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.aranoz.push(action.payload);
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.aranoz = state.aranoz.filter((item) => item._id !== action.payload._id);
      });
  },
});

export { getProductThunk, postProductThunk, deleteProductThunk };
export default productSlice.reducer;
