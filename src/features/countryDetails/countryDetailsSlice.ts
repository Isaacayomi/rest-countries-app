import { createSlice } from "@reduxjs/toolkit";

interface CountryState {
  countries: any;
}

const initialState: CountryState = {
  countries: [],
};

export const countryDetailsSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountries(state, action) {
      state.countries = action.payload;
    },
  },
});

export const { fetchCountries } = countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;
