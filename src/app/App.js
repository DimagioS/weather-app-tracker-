import { useEffect } from "react";
import { CityList } from "../entities/City";
import { fetchWeatherForCity } from "../features/weather";
import { useDispatch } from "react-redux";

const cities = [
  { id: 1, name: 'Москва' },
  { id: 2, name: 'Белград' },
  { id: 3, name: 'София' },
  { id: 4, name: 'Подгорица' },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    cities.forEach(city => {
      dispatch(fetchWeatherForCity(city.name));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <CityList />
    </div>
  );
}

export default App;
