DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit varchar(50) NOT NULL,
    frequency int,
    streak int,
    user_id int
);