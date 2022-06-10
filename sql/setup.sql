-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists coffee;

CREATE table coffee(
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    money INT NOT NULL
);

INSERT INTO coffee (name, type, money) VALUES ('Mocha', 'iced', 5
),
('latte', 'hot', 5), 
('frappe', 'blended', 6);
