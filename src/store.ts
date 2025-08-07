import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import countryDetailsReducer from "./features/countryDetails/countryDetailsSlice";
import themeReducer from "./features/toggleTheme/themeSlice";
const store = configureStore({
  reducer: {
    home: homeReducer,
    countryDetails: countryDetailsReducer,
    theme: themeReducer,
  },
});
export default store;
