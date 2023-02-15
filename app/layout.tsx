import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link'; // I import this for the pictures -> <Link /> below
import { getComedians } from '../database/comedians';
import Cookie from './cookieBanner';
import styles from './layout.module.scss';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const comedians = await getComedians(); // it is an asynchronous function
  const cookie = cookies().get('ticketCookie'); // you can check the exact name in the cookies in the browser
  let cookieParsed = [];
  if (cookie) {
    cookieParsed = JSON.parse(cookie.value);
    console.log(cookieParsed);
  }

  const ticketsInCart = comedians.map((comedian) => {
    const ticketInCart = { ...comedian, ticketAmount: 0 };

    // I read the cookie and find the comedian
    const ticketAmountInCookie = cookieParsed.find(
      (object) => comedian.id === object.id,
    );

    // if I find the comedian, update the ticketAmount
    if (ticketAmountInCookie) {
      ticketInCart.ticketAmount = ticketAmountInCookie.ticketAmount;
    }
    return ticketInCart;
  });

  const sum = [];
  // adding the amounts to the array
  ticketsInCart.map((comedian) => {
    sum.push(Number(comedian.ticketAmount));
    return sum;
  });
  const finalSum = sum.reduce((acc, curr) => acc + curr, 0);

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
              <Link href="/cart">Cart ({finalSum})</Link>
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
