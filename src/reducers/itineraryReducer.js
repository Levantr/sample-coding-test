import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockFetchItineraty from "../app/mockFetchItineraty";

const initialState = { status: "idle", items: [], sortBy: "time" };

export const fetchItinerary = createAsyncThunk("itinerary/fetch", async () => {
  const response = await mockFetchItineraty();
  return JSON.parse(response.data);
});

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.unshift(action.payload);
      if (localStorage) {
        localStorage.setItem("itinerary", JSON.stringify(state.items));
      }
    },
    sortByCreated(state) {
      state.items.sort((a, b) => new Date(b.created) - new Date(a.created));
      state.sortBy = "time";
    },
    sortByTitle(state) {
      state.items.sort((a, b) => a.title.localeCompare(b.title));
      state.sortBy = "title";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerary.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItinerary.rejected, (state) => {
        state.status = "rejected";
        state.items = initialState.items;
      })
      .addCase(fetchItinerary.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      });
  },
});

export const selectItinerary = (state) => state.itinerary;

export const { addItem, sortByCreated, sortByTitle } = itinerarySlice.actions;
export default itinerarySlice.reducer;
