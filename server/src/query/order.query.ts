import { Pool } from "pg";

const OrderSchema = (pool: Pool) => {
  pool.query('create TABLE if not exists order_table( \n\
    id SERIAL PRIMARY KEY, \n\
    date VARCHAR(255) NOT NULL, \n\
    products JSON, \n\
    user_id INTEGER NOT NULL, \n\
    total_price INTEGER NOT NULL, \n\
    FOREIGN KEY(user_id) REFERENCES user_account(id) \n\
    )'
  );
};

export default OrderSchema;
