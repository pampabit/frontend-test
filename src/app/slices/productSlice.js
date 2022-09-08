import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
  },
  reducers: {
    increment: state => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions;

export default productSlice.reducer;
