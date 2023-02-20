import Image from 'next/image';
import schulz from '../public/Andrew.webp';
import ari from '../public/Ari.webp';
import iliza from '../public/Iliza.webp';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';
type MetaData = {
  title: {
    default: string;
  };
  icons: {
    shortcut: string;
  };
};
export const metadata: MetaData = {
  title: {
    default: 'Vienna Comedy Club',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

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
          <h3 className={styles.paragraphHeading}>Main DIV</h3>
          <div className={styles.introDiv}>
            Get ready to laugh until your cheeks hurt! Our standup comedians are
            the experts in tickling your funny bone with their witty jokes and
            hilarious observations. It's like a non-stop rollercoaster of
            giggles, where you'll find yourself gasping for air between belly
            laughs. Our comedians will take you on a journey of absurdity and
            sarcasm, leaving you in stitches and wanting more. So, come join us
            for a night of unforgettable comedy, where the only thing funnier
            than our comedians is the look on your face when you realize you've
            been laughing for hours!{' '}
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
