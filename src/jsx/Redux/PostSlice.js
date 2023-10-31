// filtersSlice.js
import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        institute: [], // Change to an array
    },
    reducers: {
        setInstitute: (state, action) => {
            state.institute.push(action.payload);

        },
        removeInstitute: (state, action) => {
          state.institute=action.payload
        }
    }
});

export const {setInstitute, removeInstitute} = filtersSlice.actions;

export default filtersSlice.reducer;
