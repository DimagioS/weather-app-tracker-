export const getAFiveDayForecast = (data) => {
  const forecasts = data.list;
  const dailyForecasts = {};

  forecasts.forEach((forecast) => {

    const date = new Date(forecast.dt * 1000);
    const hours = date.getHours();
    const dateKey = date.toISOString().split('T')[0];

    if (hours === 14 && !dailyForecasts[dateKey]) {
      dailyForecasts[dateKey] = forecast;
    }
  });

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const fiveDayForecast = Object.values(dailyForecasts).filter(forecast => {
    const forecastDate = new Date(forecast.dt * 1000);
    return forecastDate >= currentDate;
  }).slice(0, 5);

  return fiveDayForecast;
};
