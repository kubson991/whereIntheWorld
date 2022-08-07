import { useState } from "react";
import {
  store,
  set,
  setLoading,
  setFilterCountries,
  setAllCountries,
} from "../store";

const fetchInfo = () => {
  let data = [];
  const fetchData = async () => {
    store.dispatch(setLoading(true));
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      if (res.ok) {
        data = await res.json();
      } else {
        throw new Error("algo paso");
      }
      store.dispatch(setAllCountries(data));
      store.dispatch(set(data));
    } catch (error) {
      store.dispatch(setAllCountries([]));
      store.dispatch(set([]));
    }
    store.dispatch(setLoading(false));
  };

  const fetchDataByFilter = async (filter) => {
    const actualFilters = store.getState().reducer.filterCountries;
    const newFilter = { ...actualFilters, input: filter };

    store.dispatch(setLoading(true));
    store.dispatch(setFilterCountries(newFilter));

    const totalCountries = store.getState().reducer.allCountries;

    const FilteredCountries = totalCountries.filter((country) => {
      if (
        country.name.official
          .toLowerCase()
          .includes(newFilter.input.toLowerCase()) &&
        country.region.toLowerCase().includes(newFilter.select.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    store.dispatch(set(FilteredCountries));
    store.dispatch(setLoading(false));
  };

  const fetchDataByRegion = async (filter) => {
    const actualFilters = store.getState().reducer.filterCountries;
    let newFilter;
    if (filter !== "all") {
      newFilter = { ...actualFilters, select: filter };
    } else {
      newFilter = { ...actualFilters, select: "" };
    }

    store.dispatch(setLoading(true));
    store.dispatch(setFilterCountries(newFilter));

    const totalCountries = store.getState().reducer.allCountries;

    const FilteredCountries = totalCountries.filter((country) => {
      if (
        country.name.official
          .toLowerCase()
          .includes(newFilter.input.toLowerCase()) &&
        country.region.toLowerCase().includes(newFilter.select.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    store.dispatch(set(FilteredCountries));
    store.dispatch(setLoading(false));
  };

  return {
    fetchData,
    fetchDataByFilter,
    fetchDataByRegion,
  };
};

export default fetchInfo;
