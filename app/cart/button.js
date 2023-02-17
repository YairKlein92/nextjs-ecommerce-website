'use client';
import styles from '../cart/page.module.scss';

export default function Button(props) {
  console.log('comedian', props.comedians);
  console.log(props.cookieParsed);

  return <button className={styles.buttons}>Remove from cart</button>;
}
