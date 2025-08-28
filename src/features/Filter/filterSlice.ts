import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FilterProps = {
  // original data from /all
  allCountries: any[];
  // region-based subset
  filteredCountries: any[];
  // selected region
  filter: string;
  // user search term
  searchQuery: string;
};

const initialState: FilterProps = {
  allCountries: [],
  filteredCountries: [],
  filter: "",
  searchQuery: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setAllCountries(state, action: PayloadAction<any[]>) {
      state.allCountries = action.payload;
    },

    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },

    setFilterCountries(state, action: PayloadAction<any[]>) {
      state.filteredCountries = action.payload;
    },

    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setAllCountries,
  setFilter,
  setFilterCountries,
  setSearchQuery,
} = filterSlice.actions;
export default filterSlice.reducer;
