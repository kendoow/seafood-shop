create TABLE order_table(
    id SERIAL PRIMARY KEY,
    counter INTEGER,
    user_id INTEGER,
    date VARCHAR(255),
    FOREIGN KEY(user_id) REFERENCES user_account(id), 
    product_id INTEGER, 
    total_price INTEGER NOT NULL,
    FOREIGN KEY(product_id) REFERENCES products(id)
);