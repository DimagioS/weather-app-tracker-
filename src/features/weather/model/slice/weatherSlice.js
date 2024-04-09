import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherForCity } from '../services/weatherService';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
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
