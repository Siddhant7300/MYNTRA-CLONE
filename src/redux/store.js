// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cart'

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer
    // Add more reducers here if needed
  },
  
});

export default store;
