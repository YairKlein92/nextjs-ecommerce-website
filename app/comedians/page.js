import { cookies } from 'next/headers';
import Image from 'next/image';
import { getComedians } from '../../database/comedians';
import styles from '../comedians/page.module.scss';

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
                    width="156"
                    height="111"
                  />
                  {/* </Link> */}

                  <div className={styles.intro}>
                    <p>"{comedian.lastSpecial}" world tour</p>
                    <div className={styles.span}>09.01.2023 - 04.04.2023</div>
                    <div className={styles.span}> ONLY in Vienna</div>
                    <span className={styles.span}>
                      Tickets:{comedian.ticketAmount}
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.comedianDiv} ${styles.comedianDivBack}`}
                >
                  <div className={styles.purchaseDiv}>
                    <span>
                      Tickets for ${Math.floor(comedian.ticketPriceMin)}
                    </span>
                    <div className={styles.genresDiv}>
                      If you like:
                      <br /> {comedian.genres}
                    </div>
                    <a href={`/comedians/${comedian.id}`}>
                      <span className={styles.buyOneNow}>Buy one now!</span>
                    </a>
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
    </>
  );
}
