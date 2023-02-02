'use client';
import Image from 'next/image';
import { NotFound } from 'next/navigation';
import React from 'react';
import YouTube from 'react-youtube';
import { comedians } from '../../../database/object';
import styles from '../[standupistName]/page.module.scss';

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

export default function ComedianIntroPage({ params }) {
  const singleComedian = comedians.find((comedian) => {
    return comedian.lastName.toLocaleLowerCase() === params.standupistName;
  });
  console.log(singleComedian);
  if (!singleComedian) {
    NotFound();
  }
  return (
    <div className={styles.comedianDiv}>
      <div className={styles.comedianIntro}>
        <Image
          src={`/${singleComedian.firstName}.webp`}
          alt={singleComedian.lastName}
          width="280"
          height="200"
        />

        <h1>
          {singleComedian.firstName} {singleComedian.lastName}
        </h1>
        <p>
          {singleComedian.firstName} is a widely-known and even more funny{' '}
          {singleComedian.nationality} comedian. <br />
          {singleComedian.firstName} is {singleComedian.age} years old{' '}
          {singleComedian.podcast !== undefined
            ? `and is the
          co/host of the ${singleComedian.podcast} podcast`
            : ''}
          . His last special is called {singleComedian.lastSpecial}. <br />
          Now you have the opportunity to choose from one of the{' '}
          {singleComedian.eventNumber} standup comedy nights in Vienna to watch
          it in real life!
        </p>
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
  );
}
