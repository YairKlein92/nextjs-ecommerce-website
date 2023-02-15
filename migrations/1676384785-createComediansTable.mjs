export async function up(sql) {
  await sql`
  CREATE TABLE comedians(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  age varchar(3),
  nationality varchar(15),
  podcast varchar(50),
  last_special varchar(25),
  event_number varchar(2),
  ticket_price_min numeric(5, 2) NOT NULL,
  link varchar(15),
  description varchar(2000),
  genres varchar(2000)
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE comedians
  `;
}
