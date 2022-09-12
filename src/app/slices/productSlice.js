import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import product from '../../api/product';

export const searchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return product.getAll();
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
    rawProducts: [],
  },
  reducers: {
    filterProducts: (state, action) => {
      if (action.payload.length === 0) {
        return {
          ...state,
          value: state.rawProducts,
        };
      }
      const newList = state.rawProducts.filter(
        item =>
          item.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.model.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        value: newList,
      };
    },
  },
  extraReducers: {
    [searchProducts.pending]: state => {
      return {
        ...state,
        status: 'loading',
      };
    },
    [searchProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        rawProducts: action.payload,
        value: action.payload,
      };
    },

    [searchProducts.rejected]: state => {
      return {
        ...state,
        value: 'rejected',
      };
    },
  },
});

export const totalProducts = state => state.product.value.length || 0;
export const allProducts = state => state.product.value;
// Action creators are generated for each case reducer function
export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;
