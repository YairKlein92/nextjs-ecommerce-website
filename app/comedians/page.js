import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getComedians } from '../../database/comedians';
import styles from '../comedians/page.module.scss';
import ComedianIntroPage from './[standupistId]/page';

export default async function ComediansPage() {
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
  return (
    <>
      <div className={styles.centerText}>
        <h2 className={styles.heading}>Upcoming events</h2>
      </div>
      <main className={styles.mainDiv}>
        {ticketsInCart.map((comedian) => {
          return (
            <div className={styles.mainDiv} key={comedian.id}>
              <div className={styles.comedianDiv}>
                {/* <Link href={`/comedians/${comedian.id}`}> */}
                <h3 key={comedian.id}>
                  {comedian.firstName} {comedian.lastName}
                </h3>
                <Image
                  src={`/${comedian.firstName}.webp`}
                  alt={comedian.lastName}
                  width="112"
                  height="80"
                />
                {/* </Link> */}

                <div className={styles.intro}>
                  <p>"{comedian.lastSpecial}" world tour</p>
                  <div className={styles.span}>09.01.2023 - 04.04.2023</div>
                  <div className={styles.span}>
                    {' '}
                    {comedian.eventNumber} events in Vienna
                  </div>
                  <div className={styles.span}>
                    Tickets:{comedian.ticketAmount}
                  </div>
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
                <div className={styles.purchaseDiv}>
                  <span>Tickets from {comedian.ticketPriceMin}</span>
                  <a href={`/comedians/${comedian.id}`}>
                    <span className={styles.buyOneNow}>Buy one now!</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
