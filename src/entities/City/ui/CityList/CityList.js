import { CityCard } from '../CityCard/CityCard';
import styles from './CityList.module.scss';

export const CityList = ({ cities }) => {
  return (
    <div className={styles.cardСontainer}>
      {cities.map(city => (
        <CityCard
          key={city.id}
          name={city.name}
          country={city.country}
        />
      ))}
    </div>
  );
}
