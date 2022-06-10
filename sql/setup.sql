-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists Coffee;

CREATE table coffee(
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    price INT NOT NULL,
);

INSERT INTO coffee(name, type, price) VALUES ('Mocha', 'iced', 5
),
('latte', 'hot', 4.5), 
('frapp', 'blended', 5.5);
