'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from '../[standupistId]/page.module.scss';

export class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <YouTube videoId="9PihU6Jo7ps" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default function Comedian(props) {
  const router = useRouter();
  const [count, setCount] = useState(1);
  return (
    <>
      <h1 className={styles.heading}>
        {props.comedian.firstName}'s comedy night
      </h1>

      <div className={styles.comedianDiv}>
        <div className={styles.comedianText}>
          <div className={styles.comedianIntro}>
            <h3 className={styles.comedianNameHeader}>
              {props.comedian.firstName} {props.comedian.lastName}
            </h3>
            <div className={styles.paragraphDiv}>
              {props.comedian.firstName} is a widely-known and even more funny{' '}
              {props.comedian.nationality} comedian. <br />
              {props.comedian.firstName} is {props.comedian.age} years old
              {props.comedian.podcast !== ''
                ? ` and is the
          co/host of the ${props.comedian.podcast} podcast`
                : ''}
              . {props.comedian.firstName}'s last special that you are about to
              cry laughing at is called {props.comedian.lastSpecial}. <br />
              Get ready to laugh until your sides hurt, because
              {props.comedian.firstName}'s event of the year is here! This
              incredible lineup of comedian is ready to take the stage and
              deliver an unforgettable night of hilarity that will have you
              gasping for air. From observational comedy to witty one-liners,
              this comedian knows exactly how to tickle your funny bone. So
              gather your friends and join us for a night of non-stop laughs
              that will leave you feeling uplifted and energized. Get your
              tickets now and be prepared for an evening of pure comedy gold!
              <div>
                <div className={styles.buttonDiv}>
                  <button
                    className={styles.buttons}
                    onClick={() => {
                      const ticketCookie = getParsedCookie('ticketCookie');
                      // if cookie doesn't exist we initialize the value with 1
                      if (!ticketCookie) {
                        setStringifiedCookie('ticketCookie', [
                          { id: props.comedian.id, ticketAmount: 1 },
                        ]);
                        // if there's no cookie function stop here
                        return;
                      }
                      const foundTicket = ticketCookie.find((cookie) => {
                        return cookie.id === props.comedian.id;
                      });
                      // if ticket is inside the cookie
                      if (foundTicket) {
                        foundTicket.ticketAmount++;
                      } else {
                        ticketCookie.push({
                          id: props.comedian.id,
                          ticketAmount: 1,
                        });
                      }
                      // update the cookie
                      setStringifiedCookie('ticketCookie', ticketCookie);
                      router.refresh();
                    }}
                  >
                    Add a ticket
                  </button>
                  <button
                    className={styles.buttons}
                    onClick={() => {
                      const ticketCookie = getParsedCookie('ticketCookie');
                      // if cookie doesn't exist we initialize the value with 1
                      if (!ticketCookie) {
                        return;
                      }
                      const foundTicket = ticketCookie.find((cookie) => {
                        return cookie.id === props.comedian.id;
                      });
                      // if ticket is inside the cookie
                      if (foundTicket) {
                        foundTicket.ticketAmount--;
                        if (foundTicket.ticketAmount < 0) {
                          foundTicket.ticketAmount = 0;
                        }
                      } else {
                        return;
                      }
                      // update the cookie
                      setStringifiedCookie('ticketCookie', ticketCookie);
                      router.refresh();
                    }}
                  >
                    Remove a ticket
                  </button>
                  <button
                    className={styles.buttons}
                    data-test-id="product-add-to-cart"
                    onClick={() => {
                      const ticketCookie = getParsedCookie('ticketCookie');

                      if (!ticketCookie) {
                        setStringifiedCookie('ticketCookie', [
                          { id: props.comedian.id, ticketAmount: 1 },
                        ]);
                        return; // if there is no cookie function stop here
                      }

                      const foundTicket = ticketCookie.find((cookie) => {
                        return cookie.id === props.comedian.id;
                      });

                      if (foundTicket) {
                        foundTicket.ticketAmount += count;
                      } else {
                        ticketCookie.push({
                          id: props.comedian.id,
                          ticketAmount: count,
                        });
                      }

                      setStringifiedCookie('ticketCookie', ticketCookie);
                      setCount(1);
                      router.refresh();
                    }}
                  >
                    Add to cart
                  </button>
                  <input
                    className={styles.inputField}
                    defaultValue={count}
                    data-test-id="product-quantity"
                    onChange={(event) => {
                      setCount(Number(event.currentTarget.value));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>{' '}
          {/* intro end */}
          <Image
            src={`/${props.comedian.firstName}.webp`}
            alt={props.comedian.lastName}
            width="585"
            height="414"
          />
        </div>{' '}
        {/* text end */}
      </div>
      <YoutubeVideo />
    </>
  );
}
