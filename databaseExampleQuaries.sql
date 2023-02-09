-- Creating a table

CREATE TABLE books (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author varchar(30) NOT NULL,
  title varchar(40) NOT NULL,
);

-- Inserting book

INSERT INTO books
(authot, title)
VALUES
('Jimmy Carr', 'Before and Laughter');

--Getting the data

SELECT * FROM books
