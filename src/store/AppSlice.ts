import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  searchTerm: string;
  activeTab: string;
}

const initialState: AppState = {
  searchTerm: "",
  activeTab: "home",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },

    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setSearchTerm, clearSearchTerm, setActiveTab } =
  appSlice.actions;

export default appSlice.reducer;
