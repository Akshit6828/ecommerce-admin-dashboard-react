import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesTabs: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favoritesTabs.find(
        (tab) => tab.id === action.payload.id
      );

      if (!exists) {
        state.favoritesTabs.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoritesTabs = state.favoritesTabs.filter(
        (tab) => tab.id !== action?.payload?.id
      );
    },
    clearFavorites: (state) => {
      state.favoritesTabs = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
