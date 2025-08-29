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
      if (borders && borders.length > 0 && state.countries.length > 0) {
        state.countryDetailsBorders = borders
          .map((code: string) => {
            const match = state.countries.find((c: any) => c.cca3 === code);
            return match ? match.name.common : code;
          })
          .filter(Boolean);
      } else {
        state.countryDetailsBorders = ["None"];
      }
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

export const { fetchCountries, countryDetails, resetCountryDetails } =
  countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;
