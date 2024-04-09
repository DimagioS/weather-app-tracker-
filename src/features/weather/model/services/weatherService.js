import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../const/weatherApi";
import { getAFiveDayForecast } from "../../../../utils/weatherUtils";

export const fetchWeatherForCity = createAsyncThunk(
  'weather/fetchWeatherForCity',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          units: 'metric',
          appid: API_KEY
        }
      });

      const filteredData = getAFiveDayForecast(response.data);

      return {
        id: response.data.city.id,
        name: response.data.city.name,
        list: filteredData
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);