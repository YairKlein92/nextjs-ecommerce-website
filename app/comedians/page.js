import Image from 'next/image';
import Link from 'next/link';
import { comedians } from '../../database/object';
import styles from '../comedians/page.module.scss';

export default function ComediansPage() {
  return (
    <>
      {' '}
      <h1 className={styles.comedianHeader}>Events</h1>
      <main>
        {comedians.map((comedian) => {
          return (
            <div
              className={styles.comedianDiv}
              key={comedian.id}
              display="flex"
            >
              <Link
                href={`/comedians/${comedian.lastName.toLocaleLowerCase()}`}
              >
                <Image
                  src={`/${comedian.firstName}.webp`}
                  alt={comedian.lastName}
                  width="112"
                  height="80"
                />
              </Link>
              <div className={styles.intro}>
                <Link
                  href={`/comedians/${comedian.lastName.toLocaleLowerCase()}`}
                >
                  <h2 key={comedian.id}>
                    {comedian.firstName} {comedian.lastName}
                  </h2>
                </Link>
                <p>"{comedian.lastSpecial}" world tour</p>
                <div className={styles.span}>09.01.2023 - 04.04.2023</div>
                <div className={styles.span}>
                  {' '}
                  {comedian.eventNumber} events in Vienna
                </div>
              </div>
              <div className={styles.icons}>
                <a href="/">
                  <Image
                    src="/save.png"
                    alt="Save to your computer"
                    title="Save to your computer"
                    width="25"
                    height="25"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/phone.png"
                    alt="Download to your mobile device"
                    title="Download to your mobile device"
                    width="25"
                    height="25"
                  />
                </a>
                <a href="/">
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
                <a href="/">
                  <span className={styles.buyOneNow}>Buy one now!</span>
                </a>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
