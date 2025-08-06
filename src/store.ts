import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import countryDetailsReducer from "./features/countryDetails/countryDetailsSlice";
const store = configureStore({
  reducer: {
    home: homeReducer,
    countryDetails: countryDetailsReducer,
  },
});
export default store;
