import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
    resetFilter: (state) => {
      state.name = "";
    },
  },
});

export const { setFilter, resetFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
