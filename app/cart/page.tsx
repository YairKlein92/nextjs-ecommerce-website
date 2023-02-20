import { cookies } from 'next/headers';
import Image from 'next/image';
import { getComedians } from '../../database/comedians';
import styles from '../cart/page.module.scss';
import Button from './button';

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
    default: 'Cart',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
export const dynamic = 'force-dynamic';
type CookieParsed = {
  id: number;
  ticketAmount: number;
}[];
export default async function Cart() {
  const comedians = await getComedians(); // it is an asynchronous function
  const cookie = cookies().get('ticketCookie'); // you can check the exact name in the cookies in the browser
  let cookieParsed: CookieParsed = [];
  if (cookie) {
    cookieParsed = JSON.parse(cookie.value);
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

  // creating a sum array for storing the prices
  type ListOfNumbers = number[];
  const sum: ListOfNumbers = [];
  // adding the amounts to the array
  ticketsInCart.map((comedian) => {
    sum.push(Number(comedian.ticketPriceMin) * Number(comedian.ticketAmount));
    // console.log(sum);
    return sum;
  });
  // adding the prices to get the final price of all the tickets
  const finalSum = sum.reduce((acc, curr) => acc + curr, 0);
  return (
    <>
      <div className={styles.centerText}>
        <h2 className={styles.heading}>Check the shelf one last time</h2>
      </div>
      <main className={styles.mainDiv}>
        {ticketsInCart.map((comedian) => {
          return (
            <div className={styles.mainDiv} key={comedian.id}>
              <div className={styles.comedianDivCard}>
                <div
                  className={`${styles.comedianDiv} ${styles.comedianDivFront}`}
                >
                  {/* <Link href={`/comedians/${comedian.id}`}> */}
                  <h3 key={comedian.id}>
                    {comedian.firstName} {comedian.lastName}
                  </h3>
                  <Image
                    src={`/${comedian.firstName}.webp`}
                    alt={comedian.lastName}
                    width="224"
                    height="160"
                  />

                  <div className={styles.intro}>
                    <p>"{comedian.lastSpecial}" world tour</p>

                    <div className={styles.span}>
                      Tickets in your cart:{' '}
                      <span data-test-id={`ticket-number-id-${comedian.id}`}>
                        {comedian.ticketAmount}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.comedianDiv} ${styles.comedianDivBack}`}
                >
                  <div className={styles.purchaseDiv}>
                    <span>Tickets for ${Number(comedian.ticketPriceMin)}</span>
                  </div>
                  <div className={styles.icons}>
                    <a href="/cart">
                      <Image
                        src="/save.png"
                        alt="Save to your computer"
                        title="Save to your computer"
                        width="25"
                        height="25"
                      />
                    </a>
                    <a href="/cart">
                      <Image
                        src="/phone.png"
                        alt="Download to your mobile device"
                        title="Download to your mobile device"
                        width="25"
                        height="25"
                      />
                    </a>
                    <a href="/cart">
                      <Image
                        src="/print.png"
                        alt="Print it out"
                        title="Print it out"
                        width="25"
                        height="25"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <div className={styles.heading}>Your cart</div>
      <div className={styles.cartDiv}>
        {ticketsInCart.map((comedian) => {
          return comedian.ticketAmount > 0 ? (
            <div key={comedian.id}>
              {comedian.ticketAmount} ticket/s for{' '}
              <span>{comedian.lastSpecial}</span> - $
              {Number(comedian.ticketAmount) * Number(comedian.ticketPriceMin)}
              <Button comedian={comedian} cookieParsed={cookieParsed} />
            </div>
          ) : (
            ''
          );
        })}
        <div className={styles.sum}>Sum: ${finalSum}</div>
      </div>{' '}
      <div>
        <a href="/cart/checkout">
          <button className={`${styles.buttons} ${styles.checkoutButton}`}>
            Checkout
          </button>
        </a>
      </div>
    </>
  );
}
