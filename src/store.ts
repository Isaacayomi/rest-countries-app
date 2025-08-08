import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import countryDetailsReducer from "./features/countryDetails/countryDetailsSlice";
import themeReducer from "./features/toggleTheme/themeSlice";
import searchReducer from "./features/search/searchSlice";
const store = configureStore({
  reducer: {
    home: homeReducer,
    countries: countryDetailsReducer,
    theme: themeReducer,
    search: searchReducer,
  },
});
export default store;
