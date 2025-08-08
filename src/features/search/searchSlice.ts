import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SearchProps = {
  search: string;
  searchedCountry: any[];
};

const initialState: SearchProps = {
  search: "",
  searchedCountry: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    filterSearchedCountry(state, action: PayloadAction<any[]>) {
      const searchTerm = state.search.toLowerCase();
      state.searchedCountry = action.payload.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm),
      );
    },
  },
});

export const { setSearch, filterSearchedCountry } = searchSlice.actions;
export default searchSlice.reducer;
