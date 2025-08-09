import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import countryDetailsReducer from "./features/countryDetails/countryDetailsSlice";
import themeReducer from "./features/toggleTheme/themeSlice";
import searchReducer from "./features/search/searchSlice";
import filterReducer from "./features/Filter/filterSlice";
const store = configureStore({
  reducer: {
    home: homeReducer,
    countries: countryDetailsReducer,
    theme: themeReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
