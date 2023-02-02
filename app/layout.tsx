import './global.scss';
import Link from 'next/link'; // I import this for the pictures -> <Link /> below
import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <span>
              <Link href="/">Homepage</Link>{' '}
            </span>
            {/* / means root page always, not the current page */}
            <span>
              <Link href="/comedians">Events</Link>
            </span>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>Before and Laughter</footer>
      </body>
    </html>
  );
}
