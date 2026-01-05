import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    category: "all",
    sortPrice: "",
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortPrice(state, action) {
      state.sortPrice = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSortPrice } =
  filtersSlice.actions;

export default filtersSlice.reducer;
