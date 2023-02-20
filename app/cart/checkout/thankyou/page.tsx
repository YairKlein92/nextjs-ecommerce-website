import styles from '../thankyou/page.module.scss';

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
    default: 'Thank You!',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
export default function ThankYou() {
  return (
    <div className={styles.thankYou}>
      Thank you for your purchase
      <br />
      See you soon!
    </div>
  );
}
