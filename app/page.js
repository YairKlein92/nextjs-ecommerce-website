import styles from './page.module.scss';
import Image from 'next/image';
import schulz from '../public/Andrew.webp';

export default function HomePage() {
  return (
    <main>
      {/* not recommended */}
      {/* <img className={styles.image} src="/schulz.jpg" alt="Andrew Schulz" /> */}

      <Image
        className={styles.image}
        src={schulz} // for import we need ../ for some reason
        // src="/schulz.jpg"  without the importing we need this
        width="250" // default values
        height="185"
      />
    </main>
  );
}
