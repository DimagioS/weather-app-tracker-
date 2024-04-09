import { memo } from 'react';
import { CityCard } from '../CityCard/CityCard';
import { useSelector } from 'react-redux';
import { getWeatherData, getWeatherError, getWeatherLoading } from '../../../../features/weather';
import styles from './CityList.module.scss';

export const CityList = memo(() => {
  const data = useSelector(getWeatherData);
  const loading = useSelector(getWeatherLoading);
  const error = useSelector(getWeatherError);
  
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.cardContainer}>
      {data.map(city => (
        <CityCard
          key={city.id}
          name={city?.name}
          weather={city?.list}
        />
      ))}
    </div>
  );
});