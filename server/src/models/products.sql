create TABLE products(
    id SERIAL PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    gramms INT NOT NULL
);