import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import product from '../../api/product';

export const searchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return product.getAll();
  },
);

export const getProduct = createAsyncThunk('product/detail', async id => {
  return product.getById(id);
});

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
    rawProducts: [],
    productDetail: null,
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
        status: 'rejected',
      };
    },
    [getProduct.pending]: state => {
      return {
        ...state,
        status: 'loading',
      };
    },
    [getProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        productDetail: action.payload,
      };
    },
    [getProduct.rejected]: state => {
      return {
        ...state,
        status: 'rejected',
      };
    },
  },
});

export const totalProducts = state => state.product.value.length || 0;
export const allProducts = state => state.product.value;
export const productDetail = state => state.product.productDetail;
export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;
