CREATE TABLE IF NOT EXISTS recipe (
  id                 SERIAL PRIMARY KEY,
	name               TEXT NOT NULL,
	author             TEXT,
	ingredients        TEXT,
	instructions       TEXT
);
