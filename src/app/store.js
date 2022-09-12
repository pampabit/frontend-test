import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';

export const reducers = {
  product: productReducer,
};

export default configureStore({
  reducer: reducers,
});
