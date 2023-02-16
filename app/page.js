import Image from 'next/image';
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
        <h1 className={styles.heading}>About our comedy club</h1>
      </div>
      <div className={styles.flexDiv}>
        <div className={styles.textDiv}>
          <h3>Main DIV</h3>
          <div>
            Comedy is a fundamental aspect of human nature, and it serves an
            important social function in our lives. Humor allows us to see the
            world from a different perspective, to question our assumptions and
            beliefs, and to build relationships with others through shared
            laughter. However, comedy can also be a double-edged sword, as it
            has the potential to reinforce negative stereotypes and perpetuate
            harmful attitudes. It's important to be mindful of the impact that
            humor can have on ourselves and others, and to use it responsibly
            and ethically. By cultivating a sense of humor that is grounded in
            compassion, understanding, and self-awareness, we can harness the
            power of comedy to improve our own lives and the lives of those
            around us.
          </div>
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
