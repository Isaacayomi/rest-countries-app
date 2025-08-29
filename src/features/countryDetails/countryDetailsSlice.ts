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
  countries: any; // This will be your filtered/displayed countries
  allCountries: any; // This will store ALL countries for border lookups
  countryName: string;
  countryDetailsName?: string;
  countryDetailsPopulation?: number;
  countryDetailsRegion?: string;
  countryDetailsCapital?: string;
  countryDetailsFlag?: string;
  countryDetailsSubRegion?: string;
  countryDetailsTld?: string;
  countryDetailsCurrencies?: string;
  countryDetailsLanguages?: string;
  countryDetailsBorders: string[];
}

const initialState: CountryState = {
  countries: [],
  allCountries: [], // Store all countries here for border lookups
  countryName: "",
  countryDetailsName: "",
  countryDetailsPopulation: 0,
  countryDetailsRegion: "",
  countryDetailsCapital: "",
  countryDetailsFlag: "",
  countryDetailsSubRegion: "",
  countryDetailsTld: "",
  countryDetailsCurrencies: "",
  countryDetailsLanguages: "",
  countryDetailsBorders: [],
};

export const countryDetailsSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountries(state, action: PayloadAction<any>) {
      state.countries = action.payload;
      // If this is the initial load of all countries, also store in allCountries
      if (
        !state.allCountries.length ||
        action.payload.length > state.allCountries.length
      ) {
        state.allCountries = action.payload;
      }
    },
    setAllCountries(state, action: PayloadAction<any>) {
      // New action to explicitly set all countries
      state.allCountries = action.payload;
    },
    filterCountries(state, action: PayloadAction<any>) {
      // New action for search results - only updates displayed countries, not allCountries
      state.countries = action.payload;
    },
    countryDetails(state, action) {
      const {
        countryName,
        nativeNameObj,
        population,
        region,
        capital,
        flag,
        tld,
        subregion,
        currencies,
        languages,
        borders,
      } = action.payload;

      const nativeName = nativeNameObj
        ? (Object.values(nativeNameObj)[0] as any).common || countryName
        : countryName;

      state.countryName = countryName;
      state.countryDetailsName = nativeName;
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

      // Store the raw border codes array (or empty array if no borders)
      // Let the component handle the fetching and processing
      state.countryDetailsBorders = borders || [];
    },

    resetCountryDetails(state) {
      state.countryName = "";
      state.countryDetailsName = "";
      state.countryDetailsPopulation = 0;
      state.countryDetailsRegion = "";
      state.countryDetailsCapital = "";
      state.countryDetailsFlag = "";
      state.countryDetailsSubRegion = "";
      state.countryDetailsTld = "";
      state.countryDetailsCurrencies = "";
      state.countryDetailsLanguages = "";
      state.countryDetailsBorders = [];
    },
  },
});

export const {
  fetchCountries,
  setAllCountries,
  filterCountries,
  countryDetails,
  resetCountryDetails,
} = countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;
