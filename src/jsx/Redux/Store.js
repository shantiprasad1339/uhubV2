

// store.js
import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from './PostSlice'

const store = configureStore({
  reducer: {
    filters: filtersSlice,
    // Add other reducers if needed
  },
});

export default store;
