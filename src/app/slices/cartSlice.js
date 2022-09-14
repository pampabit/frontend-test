import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cart from '../../api/cart';

export const addToCart = createAsyncThunk('cart/addToCart', async body => {
  const data = await cart.addToCart(body);
  if (data.count) {
    localStorage.setItem('itemsInCart', data.count);
  }
  return data;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
    itemsInCart: localStorage.getItem('itemsInCart') || 0,
  },
  reducers: {},
  extraReducers: {
    [addToCart.pending]: state => {
      return {
        ...state,
        status: 'loading',
      };
    },
    [addToCart.fulfilled]: (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        value: action.payload,
        itemsInCart: 1,
      };
    },
    [addToCart.rejected]: state => {
      return {
        ...state,
        status: 'rejected',
      };
    },
  },
});

export const itemsInCart = state => state.cart.itemsInCart;
// export const { } = cartSlice.actions;
export default cartSlice.reducer;
