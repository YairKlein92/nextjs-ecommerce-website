import Image from 'next/image';
import { books } from '../../database/books';
import carr from '../../public/beforeandlaughter.jpg';
import styles from './page.module.scss';

export default function bookPage() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.coolTitle}>{books[0].title}</div>
        <Image
          src={carr}
          width="200"
          height="311"
          alt="Jimmy Carr - Before and Laughter"
        />
      </div>
    </div>
  );
}
