import { memo } from 'react';
import styles from './CityCard.module.scss';
// import closeCard from './close-card.svg';

export const CityCard = memo((props) => {
  const { name, weather } = props;

  return (
    <section className={styles.weatherCard}>
      <div className={styles.cardTitleContainer}>
        <span className={styles.cityName}>{name}</span>
        {/* <span className={styles.countryName}>{country}</span> */}
        <div className={styles.cardCloseContainer}>
          {/* <div className={styles.cardCloseImg}> */}
            {/* <img src={closeCard} className={styles.closeImg} alt="Close" /> */}
          {/* </div> */}
        </div>
      </div>
      <div className={styles.temperatureContainer}>
        <span className={styles.temperatureMetric}>12</span>
        <span className={styles.weatherCondition}>Пасмурно</span>
      </div>
      <section className={styles.minMaxContainer}>
        <div className={styles.minContainer}>
          <span className={styles.minTemperature}>6</span>
          {/* <span className={styles.minText}>Мин</span> */}
        </div>
        <div className={styles.maxContainer}>
          <span className={styles.maxTemperature}>16</span>
          {/* <span className={styles.maxText}>Макс</span> */}
        </div>
      </section>
    </section>
  );
});
