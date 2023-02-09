import Image from 'next/image';
import { comedians } from '../database/comedians';
import schulz from '../public/Andrew.webp';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.mainDiv}>
      {/* not recommended */}
      {/* <img className={styles.image} src="/schulz.jpg" alt="Andrew Schulz" /> */}

      <Image
        className={styles.image}
        src={schulz} // for import we need ../ for some reason
        // src="/schulz.jpg"  without the importing we need this
        width="250" // default values
        height="185"
        alt="Andrew Schulz"
      />
    </main>
  );
}
