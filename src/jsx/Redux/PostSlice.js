// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    institute: "",
   
  },
  reducers: {
    setInstitute: (state, action) => {
      state.institute = action.payload;
    },
    
  },
});

export const { setInstitute } = filtersSlice.actions;

export default filtersSlice.reducer;
