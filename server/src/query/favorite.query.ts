import { Pool } from "pg";

const FavoriteSchema = (pool: Pool) => {
  pool.query('create TABLE if not exists favorite(\n\
    id SERIAL PRIMARY KEY,\n\
    user_id INTEGER,\n\
    FOREIGN KEY(user_id) REFERENCES user_account(id),\n\
    product_id INTEGER,\n\
    FOREIGN KEY(product_id) REFERENCES products(id)\n\
    )'
  );
};

export default FavoriteSchema;
