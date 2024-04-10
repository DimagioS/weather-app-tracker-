import { memo } from 'react';
import styles from './Skeleton.module.scss';

export const Skeleton = memo((props) => {
  const {
    className, border, height, width,
  } = props;

  const style = {
    height,
    width,
    borderRadius: border,
  };

  const btnClass = `${styles.Skeleton} ${className}`

  return (
    <div
      className={btnClass}
      style={style}
    />
  );
});
