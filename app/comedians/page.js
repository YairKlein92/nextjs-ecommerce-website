// import schulz from '../public/schulz.jpg';
// import iliza from '../public/Iliza.webp';
// import chris from '../public/chris.webp';
// import russell from '../public/russell.webp';
// import bill from '../public/bill.webp';
import { Fragment } from 'react';
import Image from 'next/image';

const comedians = [
  {
    id: 1,
    firstName: 'Andrew',
    lastName: 'Schulz',
    age: '39',
    podcast: 'Flagrant',
    lastSpecial: 'Infamous',
  },
  {
    id: 2,
    firstName: 'Iliza',
    lastName: 'Schlesinger',
    age: '39',
    podcast: 'Flagrant',
    lastSpecial: 'Infamous',
  },
  {
    id: 3,
    firstName: 'Chris',
    lastName: 'Rock',
    age: '39',
    podcast: 'Flagrant',
    lastSpecial: 'Infamous',
  },
  {
    id: 4,
    firstName: 'Russell',
    lastName: 'Peters',
    age: '39',
    podcast: 'Flagrant',
    lastSpecial: 'Infamous',
  },
  {
    id: 5,
    firstName: 'Bill',
    lastName: 'Burr',
    age: '39',
    podcast: 'Flagrant',
    lastSpecial: 'Infamous',
  },
];

export default function ComediansPage() {
  return (
    <>
      {' '}
      <h1>Comedians</h1>
      <main>
        {comedians.map((comedian) => {
          return (
            <Fragment key={comedian.id}>
              {' '}
              {/* it could be a div too */}
              <Image
                src={`/${comedian.firstName}.webp`}
                alt={comedian.lastName}
                width="250"
                height="185"
              />
              <h2 key={comedian.id}>
                {comedian.firstName} {comedian.lastName}
              </h2>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
