// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    institute: "",
    degree: "",
    hostel: "",
  },
  reducers: {
    setInstitute: (state, action) => {
      state.institute = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setHostel: (state, action) => {
      state.hostel = action.payload;
    },
  },
});

export const { setInstitute, setDegree, setHostel } = filtersSlice.actions;

export default filtersSlice.reducer;
