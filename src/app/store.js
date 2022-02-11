import { configureStore } from "@reduxjs/toolkit";
import itineraryReducer from "../reducers/itineraryReducer";

export const store = configureStore({
  reducer: {
    itinerary: itineraryReducer,
  },
});
