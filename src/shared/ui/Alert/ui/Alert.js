import { memo } from 'react';
import { ReactComponent as Remove } from '../../../assets/icons/remove.svg';
import { ReactComponent as Success } from '../../../assets/icons/success.svg';
import styles from './Alert.module.scss';

export const Alert = memo((props) => {
  const { text, type = 'error' } = props;
  return (
    <div className={styles.citySearchAlert}>
      <span className={styles.addSuccessText}>
        { text }
      </span>
      {
        type === 'error' 
          ? <Remove className={styles.img} />
          : <Success className={styles.img} />
      }
      
    </div>
  )
});
