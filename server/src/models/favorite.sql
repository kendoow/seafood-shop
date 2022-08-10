create TABLE favorite(
    id SERIAL PRIMARY KEY,
    user_id INTEGER, 
    FOREIGN KEY(user_id) REFERENCES user_account(id), 
    product_id INTEGER, 
    FOREIGN KEY(product_id) REFERENCES products(id)
);