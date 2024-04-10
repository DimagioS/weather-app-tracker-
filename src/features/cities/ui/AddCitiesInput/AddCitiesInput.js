import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ClosmagnifyingGlasseCard } from 'shared/assets/icons/magnifyingGlass.svg'
import { fetchWeatherForCity, getWeatherCities, weatherActions } from 'features/weather';
import { ERROR_MESSAGES } from 'features/cities/model/const/errors';
import { Alert } from 'shared/ui/Alert';
import styles from './AddCitiesInput.module.scss';

export const AddCitiesInput = memo(() => {
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');
  const cities = useSelector(getWeatherCities);

  const dispatch = useDispatch();

  useEffect(() => {
    let timer;

    if (error) {
      timer = setTimeout(() => setError(''), 2000);
    }

    return () => clearTimeout(timer);
  }, [error]);

  const cityAlreadyAdded = useCallback((name) => {
    return cities.some((city) => city.toLowerCase() === name.toLowerCase());
  }, [cities]);

  const validateInput = useCallback((name) => {
    if (!name.trim()) {
      setError(ERROR_MESSAGES.EMPTY_FIELD_ERROR);
      return false;
    }

    if (cityAlreadyAdded(name)) {
      setError(ERROR_MESSAGES.CITY_ADDED_ERROR);
      return false;
    }

    return true;
  }, [cityAlreadyAdded]);

  const handleAddCity = useCallback(() => {
    if (validateInput(cityName)) {
      dispatch(fetchWeatherForCity(cityName))
        .unwrap()
        .then(() => {
          dispatch(weatherActions.addCity(cityName));
          setCityName('');
        })
        .catch((error) => {
          setError(ERROR_MESSAGES.FAILED_TO_GET_DATA_ERROR);
        });
    }
  }, [cityName, dispatch, validateInput]);

  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      handleAddCity();
    }
  }, [handleAddCity]);

  const handleInputChange = useCallback((e) => {
    setCityName(e.target.value);
  }, []);

  return (
    <>
      <div className={styles.searchCityWrapper}>
        <input
          className={styles.searchCityInput}
          placeholder="Найти город" 
          value={cityName}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button 
          className={styles.searchCityBtn}
          onClick={handleAddCity}
        >
          <svg className={styles.searchIcon} viewBox="0 0 451 451">
            <ClosmagnifyingGlasseCard />
          </svg>
        </button>
      </div>
      {
        error && <Alert text={error} />
      }
    </>
  );
});
