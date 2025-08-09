import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FilterProps = {
  filteredCountries: any[];
  filter: string;
};

const initialState: FilterProps = {
  filteredCountries: [],
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload.toLowerCase();
    },

    setFilterCountries(state, action: PayloadAction<any[]>) {
      state.filteredCountries = action.payload;
    },
  },
});

export const { setFilter, setFilterCountries } = filterSlice.actions;
export default filterSlice.reducer;
