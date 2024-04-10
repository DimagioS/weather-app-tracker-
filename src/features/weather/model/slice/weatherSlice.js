import { createSlice } from '@reduxjs/toolkit';
import { loadCitiesFromLocalStorage, saveCitiesToLocalStorage } from '../services/weatherStorageService';
import { fetchWeatherForCity } from '../services/weatherService';

const initialState = {
  data: [],
  cities: loadCitiesFromLocalStorage(),
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
      saveCitiesToLocalStorage(state.cities);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city !== action.payload);
      state.data = state.data.filter(city => city.name !== action.payload);
      saveCitiesToLocalStorage(state.cities);
    },
    removeAllCity: state => {
      state.cities = [];
      state.data = [];
      saveCitiesToLocalStorage(state.cities);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherForCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherForCity.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchWeatherForCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: weatherActions } = weatherSlice;
export const { reducer: weatherReducer } = weatherSlice;
