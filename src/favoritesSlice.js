import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: savedFavorites,
  reducers: {
    addFavorite(state, action) {
      const exists = state.find(p => p.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFavorite(state, action) {
      const updated = state.filter(p => p.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
