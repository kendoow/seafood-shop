create TABLE tokens(
    id SERIAL PRIMARY KEY,
    refreshToken VARCHAR(255),
    token_id INTEGER,
    FOREIGN KEY(token_id) REFERENCES user_account(id)
);