import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CityList } from "entities/City";
import { AddCitiesInput } from "features/cities";
import { fetchWeatherForCity, getWeatherCities } from "features/weather";

const App = () => {
  const dispatch = useDispatch();
  const cities = useSelector(getWeatherCities);
  
  useEffect(() => {
    cities.forEach(city => {
      dispatch(fetchWeatherForCity(city));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <AddCitiesInput />
      <CityList />
    </div>
  );
}

export default App;
