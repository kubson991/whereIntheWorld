import { configureStore, createAction } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer: {
    reducer,
  },
});

const set = (payload) => {
  return {
    type: "set",
    payload,
  };
};
const setAllCountries = (payload) => {
  return {
    type: "setAllCountries",
    payload,
  };
};
const setLoading = (payload) => {
  return {
    type: "setLoading",
    payload,
  };
};
const setFilterCountries = (payload) => {
  return {
    type: "setFilterCountries",
    payload,
  };
};

export { set, store, setLoading, setFilterCountries, setAllCountries };
