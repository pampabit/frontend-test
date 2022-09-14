import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

export const reducers = {
  product: productReducer,
  cart: cartReducer,
};

export default configureStore({
  reducer: reducers,
});
