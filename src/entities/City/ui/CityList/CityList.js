import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData, getWeatherLoading, weatherActions } from 'features/weather';
import { CityCard } from '../CityCard/CityCard';
import { Skeleton } from 'shared/ui/Skeleton';
import { RemoveCardsButton } from '../RemoveCardsButton';
import styles from './CityList.module.scss';

export const CityList = memo(() => {
  const data = useSelector(getWeatherData);
  const loading = useSelector(getWeatherLoading);
  const dispatch = useDispatch();

  const handleRemoveAllCards = useCallback(() => {
    dispatch(weatherActions.removeAllCity());
  }, [dispatch]);
  
  if (loading) {
    return (
    <div className={styles.cardContainer}>
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index} className={styles.cityCard} width={310} height={300} />
      ))}
    </div>
    )
  }

  return (
    <div className={styles.cardList}>
      <div className={styles.cardContainer}>
        {data.map(city => (
          <CityCard
            key={city.id}
            name={city?.name}
            dailyForecast={city?.list}
          />
        ))}
      </div>
      {!loading && data.length > 0 && (
        <RemoveCardsButton text={'Удалить все карточки'} removeAllCards={handleRemoveAllCards} />
      )}
    </div>
  );
});