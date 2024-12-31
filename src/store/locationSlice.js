import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    lat: null,
    lng: null,
  },
  address: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { setLocation, setAddress } = locationSlice.actions;

export default locationSlice.reducer;
