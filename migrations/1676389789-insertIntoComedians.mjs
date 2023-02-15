const comedians = [
  {
    id: 1,
    first_name: 'Andrew',
    last_name: 'Schulz',
    age: '39',
    nationality: 'American',
    podcast: 'Flagrant',
    last_special: 'Infamous',
    event_number: '1',
    ticket_price_min: 30,
    link: 'vpHhLk2lEmg',
    description: '',
    genres:
      'observational comedy, sketch comedy, insult comedy, sarcasm, satire, improvisational comedy',
  },
  {
    id: 2,
    first_name: 'Iliza',
    last_name: 'Schlesinger',
    age: '39',
    nationality: 'American',
    podcast: 'Truth and Iliza',
    last_special: 'Hot Forever',
    event_number: '1',
    ticket_price_min: 30,
    link: 'XCQ-vMN9b4s',
    description: '',
    genres:
      'observational comedy, sketch comedy, feminist comedy, sarcasm, improvisational comedy',
  },
  {
    id: 3,
    first_name: 'Chris',
    last_name: 'Rock',
    age: '57',
    nationality: 'American',
    podcast: '',
    last_special: 'Tamborine',
    event_number: '1',
    ticket_price_min: 35,
    link: 'FT4Z4Blss0U',
    description: '',
    genres:
      'observational comedy, black comedy, sketch comedy, insult comedy, sarcasm, satire, improvisational comedy',
  },

  {
    id: 4,
    first_name: 'Russell',
    last_name: 'Peters',
    age: '52',
    nationality: 'Canadian',
    podcast: '',
    last_special: 'Act Your Age',
    event_number: '1',
    ticket_price_min: 45,
    link: '9PihU6Jo7ps',
    description: '',
    genres:
      'insult comedy, heritage comedy, black comedy observational comedy, satire, improvisational comedy',
  },
  {
    id: 5,
    first_name: 'Bill',
    last_name: 'Burr',
    age: '54',
    nationality: 'American',
    podcast: 'Monday Morning',
    last_special: 'Live at Red Rock',
    event_number: '1',
    ticket_price_min: 45,
    link: 'imZ52DHBtug',
    description: '',
    genres:
      'observational comedy, sketch comedy, dark comedy, insult comedy, sarcasm, satire, improvisational comedy',
  },

  {
    id: 6,
    first_name: 'Ari',
    last_name: 'Shaffir',
    age: '48',
    nationality: 'American',
    podcast: 'Skeptic Tank',
    last_special: 'Jew',
    event_number: '1',
    ticket_price_min: 85,
    link: 'VVEkelTK1fI',
    description: '',
    genres:
      'observational comedy, heritage comedy, sketch comedy, insult comedy, sarcasm, satire, improvisational comedy',
  },
];

export async function up(sql) {
  await sql`
INSERT INTO comedians
${sql(
  comedians,
  'first_name',
  'last_name',
  'age',
  'nationality',
  'podcast',
  'last_special',
  'event_number',
  'ticket_price_min',
  'link',
  'description',
  'genres',
)}
`;
}

export async function down(sql) {
  for (const comedian of comedians) {
    await sql`
    DELETE FROM
    comedians
    WHERE
    id = ${comedian.id}
    `;
  }
}
