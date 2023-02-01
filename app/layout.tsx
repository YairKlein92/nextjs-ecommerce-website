import Link from 'next/link'; // I import this for the pictures -> <Link /> below
import './global.scss';
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
            <div>
              <Link href="/">Homepage</Link>{' '}
              {/* / means root page always, not the current page */}
              <Link href="/comedians">Standup Comedians</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>Before and Laughter</footer>
      </body>
    </html>
  );
}
