import { cache } from 'react';
import { sql } from './connect';

// export const comedians1 = [
//   {
//     id: 1,
//     firstName: 'Andrew',
//     lastName: 'Schulz',
//     age: '39',
//     nationality: 'American',
//     podcast: 'Flagrant',
//     lastSpecial: 'Infamous',
//     eventNumber: '4',
//     ticketPriceMin: '$30',
//     link: 'vpHhLk2lEmg',
//     description: '',
//     genres:
//       'observational comedy, sketch comedy, insult comedy, sarcasm, satire, improvisational comedy',
//   },
//   {
//     id: 2,
//     firstName: 'Iliza',
//     lastName: 'Schlesinger',
//     age: '39',
//     nationality: 'American',
//     podcast: 'Truth and Iliza',
//     lastSpecial: 'Hot Forever',
//     eventNumber: '6',
//     ticketPriceMin: '$30',
//     link: 'XCQ-vMN9b4s',
//     description: '',
//     genres:
//       'observational comedy, sketch comedy, feminist comedy, sarcasm, improvisational comedy',
//   },
//   {
//     id: 3,
//     firstName: 'Chris',
//     lastName: 'Rock',
//     age: '57',
//     nationality: 'American',
//     podcast: undefined,
//     lastSpecial: 'Tamborine',
//     eventNumber: '7',
//     ticketPriceMin: '$35',
//     link: 'FT4Z4Blss0U',
//     description: '',
//     genres:
//       'observational comedy, black comedy, sketch comedy, insult comedy, sarcasm, satire, improvisational comedy',
//   },
//   {
//     id: 4,
//     firstName: 'Russell',
//     lastName: 'Peters',
//     age: '52',
//     nationality: 'Canadian',
//     podcast: undefined,
//     lastSpecial: 'Act Your Age',
//     eventNumber: '12',
//     ticketPriceMin: '$45',
//     link: '9PihU6Jo7ps',
//     description: '',
//     genres:
//       'insult comedy, heritage comedy, black comedy observational comedy, satire, improvisational comedy',
//   },

//   {
//     id: 5,
//     firstName: 'Bill',
//     lastName: 'Burr',
//     age: '54',
//     nationality: 'American',
//     podcast: 'Monday Morning',
//     lastSpecial: 'Live at Red Rock',
//     eventNumber: '3',
//     ticketPriceMin: '$45',
//     link: 'imZ52DHBtug',
//     description: '',
//     genres:
//       'observational comedy, sketch comedy, dark comedy, insult comedy, sarcasm, satire, improvisational comedy',
//   },
//   {
//     id: 6,
//     firstName: 'Ari',
//     lastName: 'Shaffir',
//     age: '48',
//     nationality: 'American',
//     podcast: 'Skeptic Tank',
//     lastSpecial: 'Jew',
//     eventNumber: '6',
//     ticketPriceMin: '$85',
//     link: 'VVEkelTK1fI',
//     description: '',
//     genres:
//       'observational comedy, heritage comedy, sketch comedy, insult comedy, sarcasm, satire, improvisational comedy',
//   },
// ];

// console.log(
//   sql`

//   SELECT * FROM comedians`.then((data) => console.log(data)),
// );
type Comedian = {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  nationality: string;
  podcast: string | null;
  lastSpecial: string;
  eventNumber: string;
  ticketPriceMin: string;
  link: string;
  description: string | null;
  genres: string;
};
// get all comedians
export const getComedians = cache(async () => {
  const comedians = await sql<Comedian[]>`
  SELECT * FROM comedians
  `;
  return comedians;
});

// get a single comedian

export const getComedian = cache(async (id: number) => {
  const [comedian] = await sql<Comedian[]>`
  SELECT * FROM
    comedians
    WHERE id = ${id}
  `;
  return comedian;
});

// export async function getComedians() {
//   const comedians = await sql`
//   SELECT * FROM comedians
//   `;
//   return comedians;
// }
