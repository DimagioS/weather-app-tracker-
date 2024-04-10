import { memo } from 'react';
import styles from './RemoveCardsButton.module.scss';

export const RemoveCardsButton = memo(({ text, removeAllCards }) => {
  return (
    <button onClick={removeAllCards} className={styles.btn}>{ text }</button>
  )
});
