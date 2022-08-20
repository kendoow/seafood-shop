create TABLE order_table(
    id SERIAL PRIMARY KEY,
    counter INTEGER,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user_account(id), 
    product_id INTEGER, 
    FOREIGN KEY(product_id) REFERENCES products(id)
);