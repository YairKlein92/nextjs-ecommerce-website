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
      <h1>Event</h1>
      <div className={styles.comedianDiv}>
        <div className={styles.comedianIntro}>
          <Image
            src={`/${props.comedian.firstName}.webp`}
            alt={props.comedian.lastName}
            width="280"
            height="200"
          />

          <h1>
            {props.comedian.firstName} {props.comedian.lastName}
          </h1>
          <div className={styles.paragraphDiv}>
            {props.comedian.firstName} is a widely-known and even more funny{' '}
            {props.comedian.nationality} comedian. <br />
            {props.comedian.firstName} is {props.comedian.age} years old
            {props.comedian.podcast !== ''
              ? `and is the
          co/host of the ${props.comedian.podcast} podcast`
              : ''}
            . His last special is called {props.comedian.lastSpecial}. <br />
            Now you have the opportunity to choose from one of the{' '}
            {props.comedian.eventNumber} standup comedy nights in Vienna to
            watch it in real life only in Vienna on {props.comedian.date}!
            <div>
              <input
                defaultValue={count}
                data-test-id="product-quantity"
                onChange={(event) => {
                  setCount(Number(event.currentTarget.value));
                }}
              />
              <button
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
            </div>
          </div>
        </div>
        <div>
          <div className={styles.emoji}>
            😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂
          </div>
          <YoutubeVideo />
          <div className={styles.emoji}>
            😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂
          </div>
          <div className={styles.buyMore}>
            Buy tickets now to watch more of these fascinating comedians
          </div>
        </div>
      </div>
    </>
  );
}
