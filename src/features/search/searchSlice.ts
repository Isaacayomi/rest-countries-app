import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    resetSearch(state) {
      state.search = "";
      state.searchedCountry = [];
    },
  },
});

export const { setSearch, filterSearchedCountry, resetSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
