import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredProducts = createSelector(
  state => state.products.items,
  state => state.filters,
  (products, filters) => {
    let result = products.filter(p =>
      p.title.toLowerCase().includes(filters.search.toLowerCase())
    );

    if (filters.category !== "all") {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.sortPrice === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortPrice === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }
);
