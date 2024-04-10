import { memo, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseCard } from 'shared/assets/icons/crossCircle.svg';
import { weatherActions } from 'features/weather';
import styles from './CityCard.module.scss';

const formattedDate = (dateStr) => {
  const dateObject = new Date(dateStr);
  return dateObject.toLocaleDateString('ru-RU', {
    month: 'numeric',
    day: 'numeric'
  }).replace('/', '.');
}

export const CityCard = memo((props) => {
  const { name, dailyForecast  } = props;
  const dispatch = useDispatch();

  const handleRemove = useCallback(() => {
    dispatch(weatherActions.removeCity(name));
  }, [dispatch, name]);

  const weatherList = useMemo(() => dailyForecast.map((dayWeather, index) => (
    <div key={dayWeather.dt} className={styles.dayWeatherContainer}>
      <div className={styles.date}>{formattedDate(dayWeather.dt_txt)}:</div>
      <div className={styles.temperatureContainer}>
        <span className={styles.temperatureMetric}>{dayWeather.main.temp}</span>
      </div>
    </div>
  )), [dailyForecast ]);

  return (
    <section className={styles.weatherCard}>
      <div className={styles.cardTitleContainer}>
        <span className={styles.cityName}>{ name }</span>
        <div className={styles.cardCloseContainer} onClick={handleRemove}>
          <div className={styles.cardCloseImg}>
            <CloseCard className={styles.closeImg} />
          </div>
        </div>
      </div>
      <div className={styles.weatherList}>
        {weatherList}
      </div>
    </section>
  );
});
