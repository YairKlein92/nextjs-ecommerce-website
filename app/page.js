import Image from 'next/image';
import { comedians } from '../database/comedians';
import schulz from '../public/Andrew.webp';
import ari from '../public/Ari.webp';
import iliza from '../public/Iliza.webp';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.mainDiv}>
      {/* not recommended */}
      {/* <img className={styles.image} src="/schulz.jpg" alt="Andrew Schulz" /> */}
      <div className={styles.centerText}>
        <h2 className={styles.heading}>About our comedy club</h2>
      </div>
      <div className={styles.flexDiv}>
        <div className={styles.textDiv}>
          <h3>Main DIV</h3>
          <a href="/comedians" className={styles.button}>
            Check our events &rarr;
          </a>
        </div>
        <div className={styles.imageDiv}>
          <Image
            className={`${styles.image} ${styles.imageSchulz}`}
            src={schulz} // for import we need ../ for some reason
            // src="/schulz.jpg"  without the importing we need this
            width="250" // default values
            height="185"
            alt="Andrew Schulz"
          />
          <Image
            className={`${styles.image} ${styles.imageAri}`}
            src={ari} // for import we need ../ for some reason
            // src="/schulz.jpg"  without the importing we need this
            width="250" // default values
            height="185"
            alt="Andrew Schulz"
          />
          <Image
            className={`${styles.image} ${styles.imageIliza}`}
            src={iliza} // for import we need ../ for some reason
            // src="/schulz.jpg"  without the importing we need this
            width="250" // default values
            height="185"
            alt="Andrew Schulz"
          />
        </div>
      </div>
    </main>
  );
}
