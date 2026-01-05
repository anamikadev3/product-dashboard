import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../productsSlice";
import filtersReducer from "../../filtersSlice";
import favoritesReducer from "../../favoritesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
