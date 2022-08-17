DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit varchar(50) NOT NULL,
    frequency int,
    streak int,
    user_id int
);
INSERT INTO users (name,email,password) 
VALUES
    ('krish','ksirhs8@gmail.com', 'passkris'),
    ('nabin', 'nabin7@yahoo.com', 'passnabin');


INSERT INTO habits (habit,frequency,streak,user_id) 
VALUES
    ('sleep',2,3,1),
    ('exercise', 3,4,2);