import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CountryState {
  countries: any;
  countryDetailsName: string;
  countryDetailsPopulation?: number;
  countryDetailsRegion?: string;
  countryDetailsCapital?: string;
  countryDetailsFlag?: string;
  countryDetailsSubRegion?: string;
  countryDetailsTld?: string;
}

const initialState: CountryState = {
  countries: [],
  countryDetailsName: "",
  countryDetailsPopulation: 0,
  countryDetailsRegion: "",
  countryDetailsCapital: "",
  countryDetailsFlag: "",
  countryDetailsSubRegion: "",
  countryDetailsTld: "",
};

export const countryDetailsSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountries(state, action: PayloadAction<any>) {
      state.countries = action.payload;
    },

    countryDetails(
      state,
      action: PayloadAction<{
        countryName: string;
        population: number;
        region: string;
        capital: string;
        flag: string;
        tld?: string;
        subRegion?: string;
      }>,
    ) {
      const { countryName, population, region, capital, flag, tld, subRegion } =
        action.payload;

      state.countryDetailsName = countryName;
      state.countryDetailsPopulation = population;
      state.countryDetailsRegion = region;
      state.countryDetailsCapital = capital;
      state.countryDetailsFlag = flag;
      state.countryDetailsTld = tld ?? "";
      state.countryDetailsSubRegion = subRegion ?? "";
    },
  },
});

export const { fetchCountries, countryDetails } = countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;
