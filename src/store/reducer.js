import { createReducer } from "@reduxjs/toolkit";

// Alternately, use a "lazy initializer" to provide the initial state
// (works with either form of createReducer)
const countriesReducer = createReducer(
  {
    countries: [],
    filterCountries: { select: "", input: "" },
    loading: false,
    allCountries: [],
  },
  {
    set: (state, action) => {
      state.countries = action.payload;
    },
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setFilterCountries: (state, action) => {
      state.filterCountries = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  }
);

export default countriesReducer;
