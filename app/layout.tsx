import './global.scss';
import Link from 'next/link'; // I import this for the pictures -> <Link /> below
import Cookie from './cookieBanner';
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
        <Cookie />
        <header className={styles.header}>
          <nav>
            <span>
              <Link href="/">Homepage</Link>{' '}
            </span>
            {/* / means root page always, not the current page */}
            <span>
              <Link href="/comedians">Events</Link>
            </span>
            <span>
              <Link href="/cart">Cart</Link>
            </span>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <Link href="/books">Before and Laughter</Link>
        </footer>
      </body>
    </html>
  );
}
