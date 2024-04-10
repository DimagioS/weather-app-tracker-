import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAFiveDayForecast } from "utils/weatherUtils";
import { API_KEY, BASE_URL } from "../const/weatherApi";

export const fetchWeatherForCity = createAsyncThunk(
  'weather/fetchWeatherForCity',
  async (city, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          units: 'metric',
          appid: API_KEY
        }
      });

      if (response.data) {
        const cityName = response.data.city.name;
        const cityId = response.data.city.id;
        const filteredData = getAFiveDayForecast(response.data);
  
        return {
          id: cityId,
          name: cityName,
          list: filteredData
        };
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);