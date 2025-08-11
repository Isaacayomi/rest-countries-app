import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  tld?: string;
  subRegion?: string;
}

export interface CountryState {
  countries: any;
  countryName: string;
  countryDetailsPopulation?: number;
  countryDetailsRegion?: string;
  countryDetailsCapital?: string;
  countryDetailsFlag?: string;
  countryDetailsSubRegion?: string;
  countryDetailsTld?: string;
  countryDetailsCurrencies?: string;
  countryDetailsLanguages?: string;
}

const initialState: CountryState = {
  countries: [],
  countryName: "",
  countryDetailsPopulation: 0,
  countryDetailsRegion: "",
  countryDetailsCapital: "",
  countryDetailsFlag: "",
  countryDetailsSubRegion: "",
  countryDetailsTld: "",
  countryDetailsCurrencies: "",
  countryDetailsLanguages: "",
};

export const countryDetailsSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountries(state, action: PayloadAction<any>) {
      state.countries = action.payload;
    },
    countryDetails(state, action) {
      const {
        countryName,
        population,
        region,
        capital,
        flag,
        tld,
        subregion,
        currencies,
        languages,
      } = action.payload;

      state.countryName = countryName;
      state.countryDetailsPopulation = population;
      state.countryDetailsRegion = region;
      state.countryDetailsCapital = capital;
      state.countryDetailsFlag = flag;
      state.countryDetailsTld = Array.isArray(tld)
        ? tld.join(", ")
        : (tld ?? "");
      state.countryDetailsSubRegion = subregion ?? "";
      state.countryDetailsCurrencies = currencies ?? "";
      state.countryDetailsLanguages = languages ?? "";
    },
  },
});

export const { fetchCountries, countryDetails } = countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;
